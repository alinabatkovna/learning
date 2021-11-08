"use strict";

let myParameters = {
    name: "Alina",
    age: 25,
    bodyParameters: {
        weight: 75,
        height: 166
    },
    BMI: function () {
        let value = myParameters.bodyParameters.weight / ((myParameters.bodyParameters.height/ 100) ** 2);
        return value
    }
};

console.log(myParameters.BMI());

let newParameters = copy(myParameters);
myParameters.age = 33;
console.log(newParameters.age);
console.log(myParameters.age);

function copy(obj) {
    let newObj = {};
    for (let key in obj) {
        newObj[key] = obj[key]
    }
    return newObj;
}

let add = {
    favorite_food: "sushi",
    favorite_drink: "coffee",
    name: "Artur"
};

// ОБъеденили 2 объекта
let independentObject = Object.assign(newParameters, add);
independentObject.bodyParameters.height = 666;
console.log(independentObject);

console.log(newParameters.bodyParameters.height);
console.log(myParameters.bodyParameters.height);

// Кол-во ключей в объекте
console.log(Object.keys(myParameters).length);

let counter = 0;
for (let key in myParameters) {
    if (typeof(myParameters[key]) === "object") {
        for (let keyInObj in myParameters[key]) {
            console.log(`Мой параметр тела ${keyInObj} имеет значение ${myParameters[key][keyInObj]}`);
            counter++;
        }
    } else {
        console.log(`Мой параметр тела ${key} имеет значение ${myParameters[key]}`);
        counter++;
    }
}

console.log(counter);

let myArr = [5, 78, 9, 35, 11];
myArr.forEach(function ( item, i, myArr){
console.log(`${item} внутри массива ${myArr} под индексом ${i}`);
});

let str = "Драма, мелодрама, комедия, ужасы, фэнтези";
let genres = str.split(", ");
console.log(genres);
console.log(genres.join("; "));

console.log(myArr.sort(compareNum));

function compareNum(a, b) {
    return a - b;
}

let newArray = [1, 2, 3, 4, 5];
let oldArray = newArray.slice();

newArray[1] = "Alina";

console.log(newArray)
console.log(oldArray)

let video = ["youtube", "coub", "vimeo"],
    blogs = ["wordpress", "livejournal", "ficbook"],
    internet = [...video, ...blogs, "vk", "instagram"];

console.log(internet)
video[0] = "1";
console.log(internet)
console.log(video)
internet[1] = "2";
console.log(video)
console.log(internet)

function log (a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c)
}

let num = [2, 5, 9]
log(...num)
let newNum = [...num]
console.log(newNum)

let obj = {
    one: 1,
    two: 2
}
let newObj = {...obj}
console.log(newObj)
obj.two = 20;
console.log(obj)
newObj.one = 10;
console.log(newObj)
