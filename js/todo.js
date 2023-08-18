/**
 * @author yuna
 * @version 2023.08.09
 * @version 2023.08.15
 */

/** @type {HTMLFormControlsCollection} */
const toDoForm = document.getElementById("todo-form");

/** @type {HTMLInputElement} */
const toDoInput = document.querySelector("#todo-form input");

/** @type {HTMLUListElement} */
const toDoList = document.getElementById("todo-list");

/** @type {string} "todos" */
const TODOS_KEY = "todos";

// toDos를 항상 초기화되어 새로고침 시, localstorage의 value값이 replace되어진다
// => localstorage를 로딩할 때 toDos에 value를 push하면 해결 됨! 
/** 할일 목록 @type {string[]} */
// const toDos = [];
let toDos = [];

/**
 * 로컬 스토리지에 투두리스트 저장
 */
function saveToDos() {
    // localStorage.setItem("todos", toDos);
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

/**
 * 삭제버튼 제어
 * @param {} event 
 */
function deleteToDo(event) {
    // 발생한 이벤트의 부모 요소 확인: parentElement
    const li = event.target.parentElement;
    // console.log("deleteTargetParent:", li.id);
    toDos = toDos.filter(toDO => toDO.id !== li.id);

    // const span = li.firstChild;
    // console.log("deleteTargetFirstChild:", span);

    li.remove();
    // localStorage.removeItem(TODOS_KEY);
}

/**
 * 투두 리스트 생성
 * li span button 엘리먼트 생성
 * @param {string} newTodo 
 */
function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;                          // li의 id속성값 부여 (삭제 용이)

    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const button = document.createElement("button");
    button.innerText = "🙁";
    button.addEventListener("click", deleteToDo);
    // console.log(li);
    li.appendChild(span);
    li.appendChild(button)
    toDoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";

/** 투두리스트 오브젝트
 * @type { {text: string[], id: Date.now()} }
 */
    const newTodoObj = {
        text:newTodo,
        id: Date.now()
    };

    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

/*
function sayHello(item) {
    console.log("this", item);
    // paintToDo(item);
}
*/

const savedTodos = localStorage.getItem(TODOS_KEY, JSON.stringify(toDos));
console.log("savedTodos: " + savedTodos);

// 로컬스토리지가 비어있지 않다면 데이터 불러와서 리스트 생성 => paintToDo 함수로 넘김
if(savedTodos !== null) {
    const parsedToDos = JSON.parse(savedTodos);
    // console.log("parsedToDos: " + parsedToDos);
    
    // toDos 초기화 방지
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
    // console.log("localsotrage items pushed toDos", toDos);

    // parsedToDos.forEach(sayHello);
    // parsedToDos.forEach((item) => {
        //     console.log("this", item)
        // });
        
}
