/*
============================================
; Title:  Exercise 1.3 - Class Refresher
; Author: Tyler Armstrong
; Date:   24 February 2019
; Modified By: N/A
; Description: Showcases class constructors and prototypes.
;===========================================
*/

/**
* Params: firstName, lastName, assignment
* Response: output
* Description: Returns a well-formatted string header
*/
const header = require('../armstrong-header');

console.log(header.display("Tyler", "Armstrong", "Exercise 1.3") + '\n');

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>


*/

// start program

// Cell phone constructor function
function CellPhone(manufacturer, model, color, price) {
  this.manufacturer = manufacturer;
  this.model = model;
  this.color = color;
  this.price = price;
}

// Method Prototypes to share functionality for each instance of 'CellPhone'
CellPhone.prototype.getPrice = function() {
  return this.price;
}
CellPhone.prototype.getModel = function() {
  return this.model;
}
CellPhone.prototype.getDetails = function() {
  let output = `-- DISPLAYING CELL PHONE DETAILS -- \n`;
  output += `Manufacturer: ${this.manufacturer} \n`;
  output += `Model: ${this.getModel()} \n`;
  output += `Color: ${this.color} \n`;
  output += `Price: ${this.getPrice()} \n`;
  return output;
}

// Instantiate new CellPhone object
let IPhone = new CellPhone("Apple", "Xs", "Space Grey", 1349);

// Log the IPhone Object to the console.
console.log(IPhone.getDetails());

// end program
