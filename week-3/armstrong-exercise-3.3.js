/*
============================================
; Title:  Exercise 3.2 - Singleton Pattern
; Author: Tyler Armstrong
; Date:   10 March 2019
; Modified By: N/A
; Description: Showcases the Singleton Design Pattern.
;===========================================
*/

/**
* Params: firstName, lastName, assignment
* Response: output
* Description: Returns a well-formatted string header
*/
const header = require('../armstrong-header');

console.log(header.display("Tyler", "Armstrong", "Exercise 3.3"));

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Same database instance? true

*/

// start program

var DatabaseSingleton = (function () {

  var instance;

  function createInstance() {
    var postgresDatabase = new Object("Database instance initialized!");
    return postgresDatabase;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  }

})();

function databaseSingletonTest() {
  const mySql = DatabaseSingleton.getInstance();
  var mongoDB = DatabaseSingleton.getInstance();
  console.log(`\nSame database instance? ${mySql === mongoDB}`);
}

databaseSingletonTest();

// end program
