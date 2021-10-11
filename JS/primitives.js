const result = confirm("Are you here?");
console.log(result);

const answer = +prompt("Вам есть 18?", "18");
console.log(typeof (answer));
document.write(answer);

const category = 'toys';
console.log(`https://someurl.com/${category}/5`);

const nameUser = prompt("What is your name?", "Alina");
alert(`Hello, ${nameUser}!`);

let incr = 10,
    decr = 10;

++incr;   // - префиксная форма инкрементации (++, а потом возращает значение)
incr++;   // - постфиксная форма инкрементации (возращает значение, а потом ++)

--decr;   // - префиксная форма декриминтации
decr--;   // - постфиксная форма декриминтации

console.log(incr);
console.log(decr);