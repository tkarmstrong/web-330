/*
============================================
; Title:  Exercise 3.2 - Factory Pattern
; Author: Tyler Armstrong
; Date:   10 March 2019
; Modified By: N/A
; Description: Showcases the Factory Design Pattern.
;===========================================
*/

/**
* Params: firstName, lastName, assignment
* Response: output
* Description: Returns a well-formatted string header
*/
const header = require('../armstrong-header');

console.log(header.display("Tyler", "Armstrong", "Exercise 3.2") + '\n');
/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }

 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }

*/

// start program
function Postgres(properties) {
  this.username = properties.username || "admin";
  this.password = properties.password || "s3cret";
  this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
  this.username = properties.username || "ca-admin";
  this.password = properties.password || "ca-s3cret";
  this.server = properties.server || "localhost:8000";
  this.version = properties.version || 5.7;
}

function Oracle(properties) {
  this.username = properties.username || "superadmin";
  this.password = properties.password || "superadmin";
  this.server = properties.server || "localhost:8080";
  this.version = properties.version || "12c";
}

function Informix(properties) {
  this.username = properties.username || "root";
  this.password = properties.password || "root";
  this.server = properties.server || "localhost:3000";
}

function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {

  switch (properties.databaseType) {
    case "Postgres" : this.databaseClass = Postgres;
      break;
    case "MySQL" : this.databaseClass = MySql;
      break;
    case "Oracle" : this.databaseClass = Oracle;
      break;
    default : this.databaseClass = Informix;
  }

  return new this.databaseClass(properties);
};

var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
  databaseType: "Postgres",
  username: "admin",
  password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
  databaseType: "MySQL",
  username: "default",
  password: "password"
});

var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
  databaseType: "Oracle",
  username: "super-admin",
  password: "Pa$$word"
});

var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
  databaseType: "Informix",
  username: "user1",
  password: "user1"
});

console.log(`\n Oracle {
  username: ${oracle.username},
  password: ${oracle.password},
  server: ${oracle.server},
  version: ${oracle.version}
}`);

console.log(`\n Informix {
  username: ${informix.username},
  password: ${informix.password},
  server: ${informix.server},
}`);
// end program
