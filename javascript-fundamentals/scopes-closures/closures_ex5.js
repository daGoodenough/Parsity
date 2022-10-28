//a closure is when a function is called outside of it's scope


var nameGenerator = function(startsWithLetter) {
  //accepts a letter you want to start with and returns a function that will find that name in an array
  var names = ['Daim', 'Krowbar', 'Wabba', 'Wamma']

  var chooseName = function() {
    for (let index = 0; index < names.length; index++) {
      const element = names[index];

      if (element[0] === startsWithLetter) {
        return element;
      }
    }
  }

  return chooseName;
}

let name = nameGenerator('D') //this is where the closure happens. name points to the function chooseName that has the same scope as nameGenerator('D')

var nameStartsWithD = name(); //this simply calls choosName where startsWithLetter === 'D'
console.log(nameStartsWithD)