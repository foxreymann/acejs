/*

QUIZ TIME

What will be console logged?

*/

var foo = 1;
function bar() {
  if (!foo) {
    var foo = 10;
  }
  console.log(foo);
}
bar();
