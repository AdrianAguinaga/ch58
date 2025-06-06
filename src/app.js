
function start() {
    console.log("App started");
    stop();
}

function stop() {
    console.log("App stopped");
}

function init() {
    console.log("App initialized");
    start();// this starts the app
}

window.onload = init;// this waits for the DOM to be fully loaded before running init 
//it waits until the html and css are fully loaded before running the init function