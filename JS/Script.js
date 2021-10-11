// const result = confirm("Are you here?");
// console.log(result);
//
// const answer = +prompt("Вам есть 18?", "18");
// console.log(typeof (answer));
// document.write(answer);
//
// const category = 'toys';
// console.log(`https://someurl.com/${category}/5`);
//
// const nameUser = prompt("What is your name?", "Alina");
// alert(`Hello, ${nameUser}!`);
//
// let incr = 10,
//     decr = 10;
//
// ++incr;   // - префиксная форма инкрементации (++, а потом возращает значение)
// incr++;   // - постфиксная форма инкрементации (возращает значение, а потом ++)
//
// --decr;   // - префиксная форма декриминтации
// decr--;   // - постфиксная форма декриминтации
//
// console.log(incr);
// console.log(decr);

"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms === '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieBD = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function getValueFromUser(question) {
    let value = null;
    while (value === null){
        value = prompt(question, '');
    }
    return value
}

function addMovie() {
    let filmName = getValueFromUser('Последний фильм, который вы смотрели?');
    let filmScore = getValueFromUser('Оцените этот фильм');
    personalMovieBD.movies[filmName] = filmScore;
    console.log(personalMovieBD);
}

function showMyBD(object) {
    if(object.privat === false) {
        console.log(object)
    } else {
        console.log("Error")
    }
}

showMyBD(personalMovieBD)

// for (let i = 0; i < 2; i++){
//     const a = prompt('Последний фильм, который вы смотрели?', '');
//     if (a && a.length < 50) {
//         const b = prompt('Оцените этот фильм', '');
//         if (b && b.length < 50) {
//             personalMovieBD.movies[a] = b;
//             console.log('Great`!');
//         }
//         else {
//             console.log('Error');
//             i--;
//         }
//     }
//     else {
//         console.log('Error');
//         i--;
//         console.log(i)
//     }
// }

// for (let i = 0; i < 2; i++){
//     const a = prompt('Последний фильм, который вы смотрели?', ''),
//         b = prompt('Оцените этот фильм', '');
//     if (a != null && b != null && a !== '' && b !== '' && a.length < 50 && b.length < 50) {
//         personalMovieBD.movies[a] = b;
//         console.log('Great`!');
//     }
//     else {
//         console.log('Error');
//         i--;
//     }
// };
