function executioner(execution) {
  return execution;
}

// for loop
function forLoop() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}

// for/in loop - only for properties of objects
function forInLoop() {
  const object = { a: 1, b: 2, c: 3, d: 4, e: 5 };

  for (x in object) {
    console.log(x);
  }
}

// for/of loop - values of an iterable object such as arrays, strings, maps, nodelists and more
function forOfLoop() {
  const array = ["a", "b", "c", 1, 2];
  const string = "helloworld";

  function switcher(dataStructure) {
    for (x of dataStructure) {
      console.log(x);
    }
  }

  switcher(array);
}

executioner(forOfLoop());
