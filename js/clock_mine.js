const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    // console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    let hours = date.getHours();
    let minutes = date.getMinutes().toString().padStart(2, "0");
    let seconds = date.getSeconds().toString().padStart(2, "0");
    
    if(hours > 12) {
        hours = hours - 12;
        hours = hours.toString().padStart(2, "0");
        hours = `PM ${hours}`;
        // console.log(hours);
    } else {
        hours = hours - 12;
        hours = hours.toString().padStart(2, "0");
        hours = `AM ${hours}`;
    }

    const time = (`${hours}:${minutes}:${seconds}`);
    clock.innerHTML = time;
    
}

getClock();
setInterval(getClock, 1000);