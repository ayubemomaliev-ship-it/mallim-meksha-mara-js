console.log("\nTask21");
let products = ["хлеб", "молоко"]
products.push("сыр")
console.log(products);

console.log("\nTask22");
let numbers = [1, 2, 3, 4, 5]
numbers.pop()
numbers.pop()
console.log(numbers);

console.log("\nTask23");
let fruits = ["яблоко", "банан", "манго"]
fruits.forEach(function (elment ,  index) {
    console.log(index+": "+elment);
    
})

console.log("\nTask24");
let scores = [10, 20, 30],a2=0
scores.push(40)
scores.push(50)
scores.forEach(function (elment) {
    a2+=elment
})
console.log("Сумма: "+a2);

console.log("\nTask25");
let names = ["Али", "Самир", "Фарангис"]
for (i = names.length-1;i>=0;i--){
    console.log(names[i]);
}

console.log("\nTask26");
let scores2 = [85, 90, 78],b=0
scores2.forEach(function (elment) {
    if (elment>=80){
        b++
    }
})
console.log(b);

console.log("\nTask27");
let colors = ["красный", "синий"]
colors.push("зелёный")
colors.push("жёлтый")
colors.pop()
console.log(colors);

console.log("\nTask28");
let numbers2 = [1, 2, 3, 4],c=[]
numbers2.forEach(function (elment) {
    c.push(Math.pow(elment, 2))
    
})
console.log(c);

console.log("\nTask29");
let pets = ["cat", "dog"]
pets.push("parrot")
pets.push("fish")
pets.push("hamster")
console.log(pets.length);

console.log("\nTask30");
let numbers3 = [5, 10, 15, 20, 25],c2=-999999
numbers3.forEach(function (elment) {
    if (c2>elment){
        c2=c2
    }
    else{
        c2=elment
    }
})
console.log(c2);

console.log("\nTask31");
let fruits2 = ["яблоко", "банан", "манго"]
for (i = 0;i<fruits2.length;i++){
    console.log(fruits2[i].length);
}

console.log("\nTask32");
let numbers4 = [1, 2, 3]
numbers4.push(4,5,6)
numbers4.forEach(function (elment) {
    if (elment%2==0){
        console.log(elment);
    }
})

console.log("\nTask33");
let cities = ["Душанбе", "Худжанд", "Бохтар"]
cities.push("Куляб")
cities.pop()
console.log(cities);

console.log("\nTask34");
let marks = [4, 5, 3, 5, 4],d=0
marks.forEach(function (elment) {
    d+=elment
})
console.log("Сумма: "+d);

console.log("\nTask35");
let words = ["привет", "мир", "javascript"]
for (i = 0;i<words.length;i++){
    if (words[i].length>3){
        console.log(words[i]);
    }
}

console.log("\nTask36");
let marks2 = [1, 2, 3, 4, 5],d2=1
marks2.forEach(function (elment) {
    d2=d2*elment
})
console.log("Произведение: "+d2);

console.log("\nTask37");
let fruits3 = ["яблоко"]
fruits3.push("банан", "манго", "киви")
fruits3.pop()
fruits3.pop()
console.log(fruits3);

console.log("\nTask38");
let ages = [12, 15, 18, 20]
ages.forEach(function (elment) {
    if (elment>=18){
        console.log(elment);
    }
})

console.log("\nTask39");
let numbers5 = [10, 20, 30, 40]
for (i = 0;i<numbers5.length;i++){
        console.log("Элемент: "+numbers5[i]);
}

console.log("\nTask40");
let scores3 = [50, 60, 70, 80],e=0
scores3.forEach(function (elment) {
    e+=elment
})
console.log("Среднее: "+(e/numbers5.length));