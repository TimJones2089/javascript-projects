function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    button.addEventListener('click', event => {
       paragraph.innerHTML = 'Houston! We have liftoff!'; 
    });
    
    missionAbort.addEventListener('mouseover', () => {
        missionAbort.style.backgroundColor = 'red';
    });
    
    missionAbort.addEventListener('mouseout', () => {
        missionAbort.style.backgroundColor = '';
    });

    function confirmationWindow() {
      let message = missionAbort.addEventListener(onclick).confirm("Are you sure you want to abort the mission?");
       if (message == true){
        missionAbort.innerHTML = "Mission aborted! Space shuttle returning home"
       } else {
        missionAbort.innerHTML = "";
       };
     }

    
}

window.addEventListener("load", init);
