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



