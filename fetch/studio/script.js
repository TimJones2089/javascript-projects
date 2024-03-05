//TODO: Add Your Code Below
window.addEventListener('load', () => {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( (response) => {
            response.json().then((json) => {
                console.log(json);
                let astronaughtCount = document.getElementById("astCount");
                astronaughtCount.innerHTML = "Number of Astronauts " + json.length;
                console.log(astCount)
                json = json.sort((a,b) => a.hoursInSpace - b.hoursInSpace);
                for(let i = 0; i < json.length; i++) {
                color = '';
                if(json[i].active === true){
                    color = "green";
                };
              
                const div = document.getElementById('container');
                
                div.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                        <li>Hours in space:${json[i].hoursInSpace}</li>
                        <li style="color:${color}">Active: ${json[i].active}</li>
                        <li>Skills: ${json[i].skills}</li>
                        </ul>
                    </div>
                    <img class="avatar" src= ${json[i].picture}>
                </div>
                `;}
                });
        } );
});