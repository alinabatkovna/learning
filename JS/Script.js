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

// function filter_movies_by_name(movies, movie_name) {
//     let result = []
//     for (let movie in movies) {
//         if (movie_name in movie['name']) {
//             result.push(movie)
//         }
//     }
//     return result

function getValueFromUser(question) {
    let value = null;
    while (value === null) {
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

// for (let i = 0; i < 2; i++){
//     const a = prompt('Последний фильм, который вы смотрели?', '');
//     if (a && a.length < 50) {
//         const b = prompt('Оцените этот фильм', '');
//         if (b && b.length < 50) {
//             personalMovieBD.movies[a] = b;
//             console.log('Great`!');
//         } else {
//             console.log('Error');
//             i--;
//         }
//     } else {
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
//     } else {
//         console.log('Error');
//         i--;
//     }
// };

function showMyBD(object) {
    if (object.privat === false) {
        console.log(object)
    } else {
        console.log("Error")
    }
}

showMyBD(personalMovieBD);

function detectPersonalLevel() {
    if (personalMovieBD.count < 10) {
        console.log("Просмотрено довольно мало фильмов!");
    } else if (personalMovieBD.count >= 10 && personalMovieBD.count < 30) {
        console.log("Вы классный зритель!");
    } else if (personalMovieBD.count >= 30) {
        console.log("Вы киноман!");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function writeYourGenres() {
for (let i = 1; i <= 3; i++) {
    let genre = prompt(`Ваш любимый жанр под номером ${i}`, "")
    personalMovieBD.genres.push(genre)
    }
}

writeYourGenres()