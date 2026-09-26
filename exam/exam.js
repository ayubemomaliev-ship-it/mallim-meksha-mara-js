console.log("\nTask1");
let fruits = ["яблоко", "банан", "манго"] 
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);

console.log("\nTask2");
let numbers = [10, 20, 30, 40, 50] 
console.log(numbers.length);

console.log("\nTask3");
let numbers2 = [10, 20, 30] 
numbers2.push(40)
console.log(numbers2);

console.log("\nTask4");
let fruits2 = ["яблоко", "банан", "манго", "киви"] 
fruits2.pop()
console.log(fruits2);

console.log("\nTask5");
let fruits3 = ["яблоко", "банан", "манго", "киви"] 
let b = fruits3.includes("банан")
if (b){
    console.log("Банан есть!");
}
else{
    console.log("Банана нет");
    
}

console.log("\nTask6");
let numbers3 = [10, 20, 30, 40, 50]
console.log(numbers3.indexOf(30));

console.log("\nTask7");
let friends = ["Али", "Самир", "Фарангис"] 
friends.forEach(function (element) {
    console.log("Привет, "+element+"!");
})

console.log("\nTask8");
let numbers4 = [-9999999, -9999999, -9999999],c=numbers4[0]
numbers4.forEach(function (element) {
    if (c>element){
        c=c
    }
    else{
        c=element
    }
})
console.log("Максимум: "+c);

console.log("\nTask9");
let numbers5 = [1, 2, 3, 4, 5, 6] ,c2=0
numbers5.forEach(function (element) {
    if (element%2==0){
        c2+=element
    }
})
console.log("Сумма чётных:  "+c2);


console.log("\nTask10");
let numbers6 = [12, 5, 8, 20, 3, 15, 7],c3=-999999,d=9999999,e=0,f=0,g=0
numbers6.forEach(function (element) {
    e+=element
    if(c3>element){
        c3=c3
        if (d<element){
            d=d
            if (element%2==0){
                f++
            }
            else{
                g++
            }
        }
        else{
            d=element
            if (element%2==0){
                f++
                
            }
            else{
                g++
            }
        }
    }
    else{
        c3=element
        if (d<element){
            d=d
            if (element%2==0){
                f++
            }
            else{
                g++
            }
        }
        else{
            d=element
            if (element%2==0){
                f++
            }
            else{
                g++
            }
        }
    }
})
console.log("Сумма: "+e);
console.log("Среднее: "+e/numbers6.length);
console.log("Максимум: "+c);
console.log("Минимум: "+d);
console.log("Чётных: "+f);
console.log("Нечётных:"+g);







