//a pure function is a function that has no side effect, keeps its won state

function bar(x,y){
  var z;
  foo(x);
  return [y,z];

  function foo(x){
    y++;
    z = x * y;
  }
}

console.log(bar(20,5)); //[6, 120]
console.log(bar(25,6)); //[7, 175]

