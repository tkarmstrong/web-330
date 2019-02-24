/*
============================================
; Title:  Exercise 1.4 - Duck Typing
; Author: Tyler Armstrong
; Date:   24 February 2019
; Modified By: N/A
; Description: Showcases JavaScript Duck Typing aka "Interfaces."
;===========================================
*/

/**
* Params: firstName, lastName, assignment
* Response: output
* Description: Returns a well-formatted string header
*/
const header = require('../armstrong-header');

console.log(header.display("Tyler", "Armstrong", "Exercise 1.4") + '\n');

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>

*/

// start program

// Classes
function Car(model) {
  this.model = model;
}

function Truck(model, year) {
  this.model = model;
  this.year = year;
}

function Jeep(model, year, color) {
  this.model = model;
  this.year = year;
  this.color = color;
}

// Duck Typing aka "Interfaces"
Car.prototype.start = function(){
  console.log("Car added to racetrack!");
}

Truck.prototype.start = function(){
  console.log("Truck added to racetrack!");
}

Jeep.prototype.start= function(){
  console.log("Jeep added to racetrack!");
}

// Empty Array
let racetrack = [];

// Function to add vehicle objects to racetrack and logs confirmation
function driveIt(vehicle) {
  vehicle.start();
  racetrack.push(vehicle);
}

// Instantiate objects, push/iterate array, and log confirmations to console
let Chevy = new Car("Camaro");
let GMC = new Truck("1500 Sierra", 2019);
let Chrysler = new Jeep("Wrangler", 1982, "Black");

driveIt(Chevy);
driveIt(GMC);
driveIt(Chrysler);

console.log(`\n -- The following vehicles have been added to the racetrack --`);

for (let index = 0; index < racetrack.length; index++) {
  const vehicle = racetrack[index];
  let output = `${vehicle.constructor.name}: ${vehicle.model}`;
  console.log(output);
}

// end program
