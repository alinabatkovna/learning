let character = {
    health: 2000,
    protection: 300,
    sayHello: function() {
        console.log("Hello")
    }
};

// let Mona = {
//     protection: 550
// };

// Старый формат объявления наследования
// Mona._proto_ = character;

// Object.setPrototypeOf(Mona, character)
// Mona.sayHello()

const Mona = Object.create(character);
console.log(Mona.health);