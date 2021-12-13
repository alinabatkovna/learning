"use strict";

const personalMovieBD = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieBD.count = +getValueFromUser('Сколько фильмов вы уже посмотрели?');
        while (personalMovieBD.count === '' || personalMovieBD.count == null || isNaN(personalMovieBD.count)) {
            personalMovieBD.count = +getValueFromUser('Сколько фильмов вы уже посмотрели?');
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieBD.count < 10) {
            console.log("Просмотрено довольно мало фильмов!");
        } else if (personalMovieBD.count >= 10 && personalMovieBD.count < 30) {
            console.log("Вы классный зритель!");
        } else if (personalMovieBD.count >= 30) {
            console.log("Вы киноман!");
        } else {
            console.log("Произошла ошибка");
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`, "");
            if (genre === '' || genre == null) {
                i--;
            } else {
                personalMovieBD.genres.push(genre)
            }
        }
        personalMovieBD.genres.forEach((item, i) =>{
            console.log(`Любимый жанр ${i} - это ${item}`)
        });
    },
    showMyBD: function (object) {
        if (object.privat === false) {
            console.log(object)
        } else {
            console.log("Error")
        }
    },
    addMovie: function () {
        let filmName = getValueFromUser('Последний фильм, который вы смотрели?');
        let filmScore = +getValueFromUser('Оцените этот фильм');
        personalMovieBD.movies[filmName] = filmScore;
        console.log(personalMovieBD);
    },
    toggleVisibleMyBD: function () {
        if (personalMovieBD.privat === true) {
            personalMovieBD.privat = false;
        } else {
            personalMovieBD.privat = true;
        }
    }
};

function getValueFromUser(question) {
    let value = null;
    while (value === null) {
        value = prompt(question, '');
    }
    return value
}

// function filter_movies_by_name(movies, movie_name) {
//     let result = []
//     for (let movie in movies) {
//         if (movie_name in movie['name']) {
//             result.push(movie)
//         }
//     }
//     return result
// }


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
// };

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