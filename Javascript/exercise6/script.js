var array = ["Banana", "Apples", "Oranges", "Blueberries"];
console.log(array);

array.shift();
console.log(array);


array.sort();
console.log(array);


array.push("Kiwi");
console.log(array);

var a = array.findIndex(() => "Apples")
console.log(a)
array.splice(a,1);
console.log(array);

// sorts in alphabetically reverse order
// array.sort((a,b) => (a>b? -1:1));
// console.log(array);

//Another way to do the same is:
// array.sort().reverse()


array.reverse()
console.log(array)


var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

console.log(array2[1][1][0])