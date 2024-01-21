//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let startingfuel = 0;
let astronautsAboard = 0;
let altitudeReached = 0;




/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
const input = require('readline-sync');

while (startingfuel <= 5000 || startingfuel > 3000 || isNaN(startingfuel)) {
  startingfuel = input.question("Enter the starting fuel level: ");
}




//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
  while (astronautsAboard <= 7 || astronautsAboard >= 1 || NaN(astronautsAboard)) {
    astronautsAboard = input.question("Enter the number of astronaughts aboard: ");
  }
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

// while (startingfuel >= 3000 && astronautsAboard >= 1) {
//   startingfuel = astronautsAboard *
// }

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
