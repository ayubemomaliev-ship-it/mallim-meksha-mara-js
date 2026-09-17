console.log("\nTask1");
let fruits = ["яблоко", "банан", "манго"]
console.log(fruits.includes("банан"));

console.log("\nTask2");
let fruits2 = ["яблоко", "банан", "манго"]
console.log(fruits2.includes("киви"));

console.log("\nTask3");
let fruits3 = ["яблоко", "банан", "манго"]
console.log(fruits3.indexOf("манго"));

console.log("\nTask4");
let fruits4 = ["яблоко", "банан", "манго"]
console.log(fruits4.indexOf("киви"));

console.log("\nTask5");
let fruits5 = ["яблоко", "банан", "манго"]
let b = fruits5.includes("яблоко")
if (b){
    console.log("Есть яблоко");
    
}
else{
    console.log("Нет яблока");
    
}

console.log("\nTask6");
let pets = ["кот", "собака", "попугай"]
let b2 = pets.includes("собака")
let c = pets.indexOf("собака") 
if (b2){
    console.log("Найдена на позиции "+c);
    
}
else{
    console.log("Не найдена");     
    
}

console.log("\nTask7");
let numbers = [10, 20, 30, 40]
let b3 = numbers.includes(20)
if (b3){
    console.log("Есть 20");
    
}
else{
    console.log("Нет 20");
    
}

console.log("\nTask8");
let numbers2 = [10, 20, 30, 40]
let c2 = numbers.indexOf(30)
console.log(c2);

console.log("\nTask9");
let friends = ["Али", "Самир", "Фарангис"]
let b4 = friends.includes("Али")
if (b4){
    console.log("Али в списке");
    
}
else{
    console.log("Али нет в списке");
    
}

console.log("\nTask10");
let friends2 = ["Али", "Самир", "Фарангис"]
let c3 = friends2.indexOf("Фарангис")
console.log(c3);

console.log("\nTask11");
let words = ["привет", "мир", "javascript"]
console.log(words.includes("мир"));

console.log("\nTask12");
let numbers1 = [5, 10, 5, 20]
let c4 = numbers1.indexOf(5)
console.log(c4);

console.log("\nTask13");
let numbers3 = [1, 2, 3, 0]
console.log(numbers3.includes(0));

console.log("\nTask14");
let numbers4 = [10, 20, 30, 40]
let d = numbers4.indexOf(100)
console.log(d);

console.log("\nTask15");
let cities = ["Душанбе", "Худжанд", "Бохтар"]
let b5 = cities.includes("Душанбе")
if (b5){
    console.log("Есть Душанбе");
    
}
else{
    console.log("Нет Душанбе");
    
}

console.log("\nTask16");
let marks = [3, 4, 5, 4, 3]
let b6 = marks.includes(5)
if (b6){
    console.log("Есть пятёрка");
    
}
else{
    console.log("Нет пятёрки");
    
}

console.log("\nTask17");
let numbers5 = [2, 4, 6, 8]
let e = numbers5.indexOf(7)
if (e!=-1){
    console.log(e);
}
else{
    console.log("Число 7 не найдено");
    
}

console.log("\nTask18");
let colors = ["красный", "синий", "зелёный"]
let e2 = colors.includes("зелёный")
if (e2){
    console.log(colors.indexOf("зелёный"));
}
else{
    console.log("Число цвет не найден");
    
}

console.log("\nTask19");
let values = [10, true, "текст"]
console.log(values.includes(true));

console.log("\nTask20");
let languages = ["JavaScript", "Python", "Java"]
let d2 = languages.indexOf("JavaScript")
console.log(d2);