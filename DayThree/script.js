//we can write array in two typs
const ary = ['A','B','C','D','E',];
const aary = new Array(1,2,3,4,5);

console.log('with bracket',ary)
console.log('with new keyword',aary)


// typs of aray

// .length       length property sets or returns the number of elements in an array.

console.log(ary.length)

var get = [ary.length-1];
console.log(get)

var get = ary[ary.length-1];
console.log (get)

// .indexOf()  indexOf() returns the first index (position) of a specified value.  
// returns -1 if the value is not found.

var index = ary.indexOf('C')
console.log (index)

// .includes()  returns true if an array contains a specified value.
//  returns false if the value is not found.

var include = ary.includes('D')
console.log (include)

var includ = ary.includes('x')
console.log (includ)


// .push()  adds new items to the end of an array.

var pus = ary.push('F')
console.log (ary)

// .unshift() adds new items to the beginning of an array.

var unsift = ary.unshift('F')
console.log (ary)

// .pop() removes the last element of an array.

var popp = ary.pop()
console.log (ary)

// .shift()  removes the first item of an array.

var sift = ary.shift()
console.log (ary)

// .reverse()

var revers = ary.reverse()
console.log (ary)

// .map

var x = aary.map(data => data+50)
console.log (x)

// .forEach()

var dataa = aary.forEach(data =>{
console.log (data +20)})

// .filter()

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);

// .short()

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits)

// .concat()

const hege = ["Cecilie", "Lone"];
const stale = ["Emil", "Tobias", "Linus"];
const children = hege.concat(stale);
console.log(children)

// .every()
const array1 = [1, 30, 39, 29, 10, 13];
const evry = (currentValue) => currentValue < 30;
console.log(array1.every(evry));

// .some()

const array = [1, 2, 3, 4, 5];
// checks whether an element is even
const even = (element) => element % 2 === 0;
console.log(array.some(even));

// .join()

const fruit = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruit.join('--'));

// .reduce()

const arr = [1, 2, 3, 4 ,5];
const reducer = (previousValue, currentValue) => previousValue * currentValue;

// 1 + 2 + 3 + 4
console.log(arr.reduce(reducer));


// .find()

const arra = [5, 1, 8, 130, 44];
const found = arra.find(element => element > 10);
console.log(found);

// .findIndex()

const array2= [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array2.findIndex(isLargeNumber));

// .fill()

const array3 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array3.fill(15, 1, 2));


// .slice()

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));


