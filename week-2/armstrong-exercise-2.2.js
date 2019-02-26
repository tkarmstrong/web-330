/*
============================================
; Title:  Exercise 2.2 - Prototypes
; Author: Tyler Armstrong
; Date:   24 February 2019
; Modified By: N/A
; Description: Showcases JavaScript Prototypes.
;===========================================
*/

/**
* Params: firstName, lastName, assignment
* Response: output
* Description: Returns a well-formatted string header
*/
const header = require('../armstrong-header');

console.log(header.display("Tyler", "Armstrong", "Exercise 2.2") + '\n');

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 The person's full name is '<fullname>.'
 The person's age is '<age>.'

*/

// start program

// 'person' prototype
let person = {
  getAge: function(){
    return this.age;
  }
}

// Instantiate person object and define 'age' & 'fullname'
let tyler = Object.create(person, {
  "age": {
    "value": "36"
  },
  "fullname": {
    "value": "Tyler Armstrong"
  }
});

// Log out the results to the console
console.log(`The person's full name is ${tyler.fullname}.`);
console.log(`The person's age is ${tyler.getAge()}.`);

// end program
