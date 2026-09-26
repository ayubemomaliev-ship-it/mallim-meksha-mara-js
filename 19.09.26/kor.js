console.log("\nTask1");
let fruits = ["apple", "banana"];
fruits.push("orange")
console.log(fruits);

console.log("\nTask2");
let fruits2 = ["banana", "orange"];
fruits2.pop()
console.log(fruits2);

console.log("\nTask3");
let fruits3 = ["banana", "orange"];
fruits3.unshift("apple")
console.log(fruits3);

console.log("\nTask4");
let fruits4 = ["apple", "banana", "orange"];
fruits4.shift()
console.log(fruits4);

console.log("\nTask5");
let fruits5 = ["apple", "banana", "orange"];
console.log(fruits5.includes("banana"));

console.log("\nTask6");
let fruits6 = ["apple", "banana", "orange"];
console.log(fruits6.indexOf("orange"));

console.log("\nTask7");
let fruits7 = ["apple", "banana", "orange"];
console.log(fruits7.join("-"));

console.log("\nTask8");
let fruits8 = ["apple", "banana", "orange", "kiwi"];
console.log(fruits8.slice(1,3));

console.log("\nTask9");
let fruits9 = ["apple", "banana", "orange", "kiwi"];
fruits9.splice(1,1)
console.log(fruits9);

console.log("\nTask10");
let fruits10 = ["apple", "orange"];
fruits10.splice(1,0,"banana")
console.log(fruits10);

console.log("\nTask11");
let fruits11 = ["apple", "banana", "orange"];
fruits10.forEach(function (element) {
    console.log(element);
})

console.log("\nTask12");
let numbers = [1, 2, 3, 4, 5];
numbers.map(function(a){
    console.log(a*2);
})

console.log("\nTask13");
let numbers2 = [3, 8, 12, 5, 20, 7];
numbers2.filter(function (a) {
    if (a>10){
        console.log(a);
        
    }   
})

console.log("\nTask14");
let numbers3 = [5, 12, 8, 20, 3];
numbers3.find(function (a) {
    if (a>10){
        console.log(a);
        
    }   
})

console.log("\nTask15");
let numbers4 = [5, 12, 8, 20, 3];
let t = numbers4.findIndex(function (a) {
       return a>10 
})
console.log(t);

console.log("\nTask16");
let numbers5 = [3, 5, 7, 8, 11];
let t2 = numbers5.some(function (a) {
       return a%2==0 
})
console.log(t2);

console.log("\nTask17");
let numbers6 = [2, 4, 6, 8, 10];
let t3 = numbers6.every(function (a) {
       return a%2==0 
})
console.log(t3);

console.log("\nTask18");
let numbers7 = [10, 20, 30, 40];
let t4 = numbers7.reduce(function (a) {
       return a+=a
})
console.log(t4);

console.log("\nTask19");
let numbers8 = [10, 2, 5, 1, 20];
let t5 = numbers8.sort(function (a,a2) {
       return a - a2
})
console.log(t5);

console.log("\nTask20");
let fruits0 = ["apple", "banana", "orange", "kiwi"];
fruits0.reverse()
console.log(fruits0);

console.log("\nTask21");
let numbers9 = [5, 15, 8, 20, 12];
let t6 = numbers9.findLast(function (a) {
       return a >10
})
console.log(t6);

console.log("\nTask22");
let numbers10 = [5, 15, 8, 20, 12];
let t7 = numbers10.findLastIndex(function (a) {
       return a >10
})
console.log(t7);

console.log("\nTask23");
let numbers11 = [1, [2, 3], [4, 5]];
let t8 = numbers11.flat()
console.log(t8);

console.log("\nTask24");
let numbers12 = [1, 2, 3];
let t9 = numbers12.flatMap(function(a){
    return [a,a*2]
})
console.log(t9);

console.log("\nTask25");
let fruits1 = ["apple", "banana", "orange"];
let c = fruits1.keys()
console.log(...c);

console.log("\nTask26");
let fruits12 = ["apple", "banana", "orange"];
let c2 = fruits12.values()
console.log(...c2);

console.log("\nTask27");
let fruits13 = ["apple", "banana", "orange"];
let c3 = fruits13.entries()
console.log(...c3);