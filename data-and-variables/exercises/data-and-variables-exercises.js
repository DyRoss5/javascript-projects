// Declare and assign the variables below
let shuttleName = 'Determination';
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 250000000;
let distanceToMoonKm = 384400;
const milePerKm = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log (typeof "Determination");
console.log (typeof 17500);
console.log (typeof 250000000);
console.log (typeof 384400);
console.log (typeof 0.621);
// Calculate a space mission below
let milesToMars = 250000000 * 0.621;
let hrsToMars = 250000000 / 17500;
let daysToMars = hrsToMars / 24; 
// Print the results of the space mission calculations below
console.log(milesToMars);
console.log(hrsToMars);
console.log(daysToMars);
console.log(shuttleName + " will take " + daysToMars + " days to reach Mars.");
// Calculate a trip to the moon below
let milesToMoon = 384400 * 0.621
let hrsToMoon = 384400 / 17500
let daysToMoon = hrsToMoon / 24
// Print the results of the trip to the moon below
console.log(milesToMoon);
console.log(hrsToMoon);
console.log(daysToMoon);
console.log (shuttleName + " will take " + daysToMoon + " days to reach the Moon.")
