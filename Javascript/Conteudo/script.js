// // 1 - criar arrays

// const lista = [1,2,3,4];

// console.log(lista);

// const item = ["Matheus", true, 2, 4.12];

// // 2 - propriedades

// const number = [2,4,6];

// console.log(number.length);

// const myName = "Matheus";

// console.log(myName.length);

// const arr = ["a", "b", "c", "d"];

// console.log(arr[0]);

// // 4 - métodos

// const otherNumber = [1,2,3];

// const allNumbers = number.concat(otherNumber);

// console.log(allNumbers);

// const text = "Algum texto";

// console.log(text.toUpperCase());

// console.log(typeof text.toUpperCase);

// // 5 - objetos

// const person = {
//     name: "Matheus",
//     age: 25,
//     job: "Programador",
// };

// console.log(person);

// console.log(person.name);

// console.log(person.name.length);

// 6 - propriedades

// const carro = {
//     motor: 2.0,
//     marca: "Volkswagen",
//     modelo: "Tiguan",
//     km: 20000,
// };

// console.log(carro);

// carro.dors = 4;

// console.log(carro);

// delete carro.motor;

// // 7 - Mais sobre objetos
// const obj = {
//     a: "teste",
//     b: true,
// };

// const obj2 = {
//     c: []
// }

// Object.assign(obj2, obj);

// console.log(obj2);

// // 8 - conhecendo melhor os objetos

// console.log(Object.keys(carro));
// console.log(Object.keys(obj2));
// console.log(Object.entries(carro));

// 9 - Mutação
const a = {
name: "Matheus"
};

const b = a;

console.log(a);
console.log(b);

a.age = 31;

console.log(a);
console.log(b);

delete b.age;

console.log(a)
console.log(b)

// 10 - loops

const users = ["Matheus", "Miguel", "Pedro", "Marcelo"];

for(let i = 0; i < users.length; i++){
    console.log(`Listando o usuário: ${users[i]}`);
}

// 11 - Push e pop

const array = ["a", "b", "c"];

array.push("d");

console.log(array);

array.pop();

// 12 - shift e unshift

const letters = ["a", "b", "c"];

const letter = letters.shift();

console.log(letter);

letters.unshift("p", "q", "r");

console.log(letters);

// 13 - Métodos index
const myElements = ["Morango", "Pera", "Uva", "Pera", "Abacate"]

console.log(myElements.indexOf("Morango"));

console.log(myElements.lastIndexOf("Abacate"));

// 14- slice
const testeSlice = ["a", "b", "c", "d", "e", "f"];

const subArray = testeSlice.slice(2, 4);

console.log(subArray)

console.log(testeSlice)

const subArray2 = testeSlice.slice(2,4 +1);

console.log(subArray2)

const subArray4 = testeSlice.slice(2);

// 15 - forEach
const nums = [1,2,3,4,5];

nums.forEach((numero) => {
    console.log(`O número é ${numero}`);
});

const posts = [
    {title: "Primeiro post", category: "PHP"},
    {title: "Segundo post", category: "Java"},
    {title: "Terceiro post", category: "Flutter"}
];

posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);
});

// 16 - includes

const brands = ["BMW", "Fiat", "Fusca"];

console.log(brands.includes("Fiat"));

if(brands.includes("BMW")){
    console.log("Há carros da marca BMW")
}

// 17 - REVERSE (Reverte os elementos do array)
const reverseTeste = [1,2,3,4];

reverseTeste.reverse();

console.log(reverseTeste);

// 18 - método trim
const trimTeste = "  testando \n ";

console.log(trimTeste);
console.log(trimTeste.trim());

// 19 - padStart

const testePadStart = "1";

const newNumber = testePadStart.padStart(4,"0");

console.log(newNumber);

const testPadEnd = newNumber.padEnd(10,"0");

console.log(testPadEnd);

// 20 - split
const frase = "O rato roeu a roupa do rei de Roma";

const arrayFrase = frase.split(" ");

console.log(arrayFrase);

// 21 - join
const fraseDenovo = arrayFrase.join(" ");

console.log(fraseDenovo);

const itensParaComprar = ["Mouse", "Teclado", "Monitor"];

const fraseDeCompra = `Precisamos comprar:${itensParaComprar.join(", ")} `;

console.log(fraseDeCompra);

// 22 - repeat
const palavra = "Testando ";

console.log(palavra.repeat(5));

// 23 - rest operator

const somaInfinita = (...args) => {
    let total = 0

    for(let i = 0; i<args.length; i++){
        total += args[i]
    } 
    return total;
};

console.log(somaInfinita(1,2,3));

// 24 - for...of
const somaInfinita2 = (...args) => {
    let total = 0
    for (num of args){
        total += num
    }
    return total;
};

console.log(somaInfinita2(1,2,3));

// 25 - destructuring em objetos
const userDetails = {
    firstName: "Matheus",
    lastName: "Battisti",
    job: "programador",
}

const {firstName, lastName, job} = userDetails;

console.log(firstName, lastName, job);

// renomear variaveis
const {firstName: primeiroNome} = userDetails;

console.log(firstName);

// 26 - destructuring em arrays
const myList = ["Avião", "Submarino", "Carro"];

const [veiculoA, veiculoB, veiculoC]= myList;

console.log(veiculoA, veiculoB, veiculoC);

// 27 - JSON
const myJson = '{nome: "Matheus", "age": 31,}';

// 28 - conversão de JSON
const myObject = JSON.parse(myJson);

console.log(myObject);




