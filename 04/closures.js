'use strict';

/*
function someFunc() {
  var bar;
  function inner() {
    function foo() {
      alert(bar);
    }
  }
}
*/

/* given how nesting scope works, it's possible for an
inner scope within someFunc() to access bar.
In the above example, inner() is said to close over bar.
Therefore inner() is a Closure.
*/

function foo() {
  var bar;
  quux = 4;
  function zip() {
    var quux = 3;
    bar = true;
    console.log(bar);
  }
  return zip;
}
