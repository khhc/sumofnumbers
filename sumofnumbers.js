const tester = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumFor(data) {
  let sum = 0;
  for(let piece of data) {
    sum += piece;
  }
  return sum;
}

function sumWhile(data) {
  let sum = 0;
  let count = 0;
  while (count < data.length) {
    sum += data[count];
    count++;
  }
  return sum;
}

function sumRecursion(data) {
  if (data.length === 0) {
    return 0;
  }
  return data[0] + sumRecursion(data.slice(1, data.length));
}

function sumTheSimpleWay(data) {
  return _.reduce(data, function(num, memo) { return memo + num; }, 0);
}

console.log(sumFor(tester));
console.log(sumWhile(tester));
console.log(sumRecursion(tester));
console.log(sumTheSimpleWay(tester));