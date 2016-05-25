
var title = "Ace JavaScript Interviews",
    subtitle = "Scoping and Hoisting",
    author = "Fox Reymann"





var x = 1;

function fun() {
  if (!x) {
    var x = 10;
  }
  console.log(x);
}
fun();




var scope = {
  definition: "visibility of variables and methods in one part of a program to another part of that program"
}







var a;

expectScopeOf(a).toBe('?');








expectScopeOf(a).toBe('global scope');



function fun2 () {
  if(true) {

  }
}






// hacks

function expectScopeOf () {
  var toReturn = {}
  toReturn.toBe = function() {}

  return toReturn;
}
