var makeCounter = function(step, initialCount = 0) {
  var value = initialCount;
  var count = function() {
      value += step;
      return value
  }
  return count
}
var increaseBy2 = makeCounter(2);
var decreaseBy2 = makeCounter(-2);
console.log(increaseBy2 === decreaseBy2 ? 'counters are the same function' : 'counters are different functions')
{
  const count = increaseBy2();
  console.log('count should be 2:', count === 2)
}
{
  const count = increaseBy2();
  console.log('count should be 4:', count === 4)
}
{
  const count = decreaseBy2();
  console.log('count should be -2:', count === -2)
}