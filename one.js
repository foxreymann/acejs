
var title = "Ace JavaScript Interviews",
    subtitle = "Scoping and Hoisting",
    author = "Fox Reymann",
    profession = "Node.js developer"



















var x = 1;

function fx() {
  if (!x) {
    var x = 10;
  }
  // console.log(x);
}
fx();




var scope = {
  definition: "visibility of variables and methods in one part of a program to another part of that program"
}







var a;

expectScopeOf(a).toBe('?');








expectScopeOf(a).toBe('global scope');






function fb () {
  if(true) {
    var b;
  }
}

expectScopeOf(b).toBe('?');








expectScopeOf(b).toBe('function scope');






function fc () {
  if(true) {
    let c;
  }
}

expectScopeOf(c).toBe('?');








expectScopeOf(c).toBe('block scope');





'use strict'

function fd () {
  // console.log(d);
  // var d = 10;
}
fd();








var hoisting = {
  definition: "moving declarations to the top of current scope"
}




//hoisted();

function hoisted() {
  console.log("foo");
}









// hacks
var b,c;

function expectScopeOf () {
  var toReturn = {}
  toReturn.toBe = function() {}

  return toReturn;
}


// ReferenceError: c is not defined
