 // write  a function compose that does the same as Object.assign();
  //take any number of objects as arguments
  //throw an error if any of the arguments that are passed in are not objects


function compose(target, ...sources) {
  for (let i = 0; i < arguments.length; i++) {//checks to make sure that all args are objects
    const argument = arguments[i];
    if(typeof argument !== 'object') {
      throw TypeError;
    }
  }

  for(let obj in sources) {
    let currentObj = sources[obj];
    for(let prop in currentObj) {
      currentValue = currentObj[prop];
      target[prop] = currentValue;
    }
  }

  return target
}

let copy = {};

let source1 = {
  a: 1,
  b: 3
}

let source2 = {
  b:2,
  c:4
}

let source3 = {
  c:3,
  d: 4
}

let notObj = true;

let copied = compose(copy, source1, source2, source3);
console.log(copied)

