// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    const abort = document.getElementById("missionAbort");
    const land = document.getElementById("landing");
    const launch = document.getElementById("takeoff");
    const rocket = document.getElementById('rocket');
    rocket.style.position = "absolute";
    rocket.style.bottom = parseInt("0px");
    rocket.style.left = parseInt("0px");
    
    
    launch.addEventListener('click', () => {
        confirm('Confirm that the shuttle is ready for takeoff.');
        if(true){
            document.getElementById("shuttleBackground").style.backgroundColor = 'blue';
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
            document.getElementById("spaceShuttleHeight").innerHTML = "10,000"
           } 
        });

    land.addEventListener('click', () => {
        confirm('The shuttle is landing. Landing gear engaged.');
        if(true){
            document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
            document.getElementById("shuttleBackground").style.backgroundColor = 'green';
            document.getElementById("spaceShuttleHeight").innerHTML = "0"
            rocket.style.bottom = parseInt("0px");
        }
    });

    abort.addEventListener('click', () => {
        confirm('Confirm that you want to abort the mission.');
        if(true){
            document.getElementById("flightStatus").innerHTML = "Mission aborted.";
            document.getElementById("shuttleBackground").style.backgroundColor = 'green';
            document.getElementById("spaceShuttleHeight").innerHTML = "0"
            rocket.style.bottom = parseInt("0px");
        }
    });

    document.getElementById('up').addEventListener('click', () => {
        if(true){
            rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + "px";
      }
    });

    document.getElementById('down').addEventListener('click', () => {
        if(true){
            rocket.style.bottom = parseInt(rocket.style.bottom) - 10 + "px"
            }
    });

    document.getElementById('right').addEventListener('click', () => {
        rocket.style.left = parseInt(rocket.style.left) + 10 + "px"

    });

    document.getElementById('left').addEventListener('click', () => {
        rocket.style.left = parseInt(rocket.style.left) - 10 + "px"
    });



};
window.addEventListener("load", init);