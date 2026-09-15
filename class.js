console.log("\nTask1");
let fruits = ["яблоко", "банан", "манго"]
for (i = 0;i<fruits.length;i++){
    console.log(fruits[i]);
}

console.log("\nTask2");
let f = ["яблоко", "банан", "манго"]
f.forEach(function (elment) {
    console.log(elment);
    
})

console.log("\nTask3");
let numbers = [10, 20, 30]
numbers.push(40)
console.log(numbers);

console.log("\nTask4");
let numbers2 = [10, 20, 30, 40]
numbers2.pop()
console.log(numbers2);

console.log("\nTask5");
let colors = ["красный", "синий"]
colors.push("зелёный")
console.log(colors.length);

console.log("\nTask6");
let pets = ["кот", "собака", "попугай"]
let b = pets.pop()
console.log(b);

console.log("\nTask7");
let names = ["Али", "Самир", "Фарангис"]
names.forEach(function (elment) {
    console.log("Hello, "+elment+"!");
    
})

console.log("\nTask8");
let numbers3 = [1, 2, 3,]
numbers3.push(4)
numbers3.push(5)
console.log(numbers3);

console.log("\nTask9");
let numbers4 = [5, 10, 15, 20]
numbers4.pop()
console.log(numbers4);

console.log("\nTask10");
let fruits3 = ["яблоко", "банан"]
fruits3.push("манго")
fruits3.pop()
console.log(fruits3);

console.log("\nTask11");
let numbers6 = [10, 20, 30]
for (i = 0;i<numbers6.length;i++){
    console.log(i+": "+numbers6[i]);
}

console.log("\nTask12");
let numbers5 = [10, 20, 30]
numbers5.forEach(function (elment ,  index) {
    console.log(index+": "+elment);
    
})

console.log("\nTask13");
let a = []
a.push(1)
a.push(2)
a.push(3)
console.log(a);

console.log("\nTask14");
let cities = ["Душанбе", "Худжанд", "Бохтар", "Куляб"]
cities.pop()
console.log(cities);

console.log("\nTask15");
let scores = [50, 60, 70],a2=0
scores.forEach(function (elment) {
    a2+=elment
})
console.log(a2);

console.log("\nTask16");
let fruits4 = ["яблоко", "банан"]
fruits4.push("манго")
fruits4.pop()
fruits4.push("киви")
console.log(fruits4);

console.log("\nTask17");
let num = [1, 2, 3, 4, 5]
for (i = 0;i<num.length;i++){
    if (num[i]%2==0){
        console.log(num[i]);
    }
}

console.log("\nTask18");
let num2 = [1, 2, 3, 4, 5]
num.forEach(function (element) {
    if (element%2!=0){
        console.log(element);
    }
})

console.log("\nTask19");
let names2 = ["Али", "Самир"]
names2.push("Фарангис")
names2.push("Шариф")
console.log(names2.length);

console.log("\nTask20");
let scores2 = [10, 20, 30, 40, 50],a3=0,c=0
scores2.forEach(function (elment) {
    a3+=elment
    c++
})
console.log(a3/c);
