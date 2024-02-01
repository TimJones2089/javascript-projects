let superChimpOne = {
  name: "Chad",
  species: "Chimpanzee",
  mass: 9,
  age: 6,
  astronautID: 4,
  move: function () {return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 7,
   move: function () {return Math.floor(Math.random()*11)}
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 2,
   move: function () {return Math.floor(Math.random()*11)}
};

let superDogOne = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 8,
   move: function () {return Math.floor(Math.random()*11)}
};

let waterBear = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 	1,
   astronautID: 6,
   move: function () {return Math.floor(Math.random()*11)}
};

let crew = [superChimpOne, superChimpTwo, salamander, superDogOne, waterBear];

function crewReports(crew) {
  let str = `${crew.name} is a ${crew.species}. They are ${crew.age} years old and ${crew.mass} kilograms. Their ID is ${crew.astronautID}.`;
   return str;
   
}

function fitnessTest(arr) {
   let results = [], numSteps, turns;
 for (let i = 0; i < arr.length; i++){
     numSteps = 0;
     turns = 0;
     while(numSteps < 20){
     numSteps += arr[i].move();
     turns++;
     }
     results.push(`${arr[i].name} took ${turns} turns to take 20 steps.`);
 }
 return results;
}

console.log(crewReports(superChimpOne));
console.log(crewReports(salamander));
console.log(crewReports(superChimpTwo));
console.log(crewReports(superDogOne));
console.log(crewReports(waterBear));

console.log(fitnessTest(crew));


// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!