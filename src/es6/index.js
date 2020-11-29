//  Se añadieron los valores por defecto a las funciones 

function newFunction(name, age, country){
    var name = name || 'ariel';
    var age = age || 19;
    var country = country || 'méxico';
    console.log(name, age, country);
}


// Esto ya es con ECMAscript6
function newFunction2(name = 'ariel', age = 19, country = 'méxico'){
    console.log(name, age, country);
};

newFunction2();
newFunction2('Ruth Peña', 43, 'MX');

// ------------------- 
// Templates literals

let hello = 'Hello';
let word = 'word';
let phrase = hello + ' ' + word;
console.log(phrase)

// ECMAs+6+
// Ojo con las dobles comillas francesas 
let epichPhrase = `${hello} ${word}`
console.log(epichPhrase)


// ----------------------
// Multilinea con template literal
let lorem = 'lorem ipsum dolor \n' + 'otra manera de ver la vida'
console.log(lorem)

let lorem2 = `Un couteau dans le coeur 
            omg is this?`
console.log(lorem2)

// Descomposición de datos
let person = {
    'name': 'ariel',
    'age': 19,
    'country': 'MX'
}

// Antes se usaba
console.log(person.age, person.country, person.name)

// omg la nnueva forma
let {name, age,  country} = person;
console.log(age, name, country)

// --------------------
// Operador de propagación, expandir varios elementos
let team1 = ['Ariel', 'Martín', 'Ricardo']
let team2 = ['Wendy', 'Vania', 'Omg?']

let complete = ['Otro integrante', ...team1, ...team2]
console.log(complete)

// --------------------------
// Let es una nueva forma de guardar las variables, let sólo está disponible en el bloque de código donde será llamado

{
    var globalVar = 'global';
}

{
    let globalLet = 'Global let';
}

console.log(globalVar);
console.log(globalLet);

// -----------------------
// Const, permite establecer una variable 
const a = 'b';
a = 'c';

// -----------------------------
// Manejo de objetos
let name = 'ariel';
let age = 19;

// Anteriormente
obj = {name: name, age: age};

// Ahora 
obj2 = {name, age};
console.log(obj2)


// -----------------------------
// Sintaxis más sencilla y un this no vinculable

const names = [
    {name: 'Ariel', age: 19},
    {name: 'Ruth', age: 43},
    {name: 'Israel', age: 19}
]

let listOfNames = names.map(function(item){
    console.log(item.name);
})

// Nueva versión omg
let listOfNames2 = names.map(item => console.log(item.name))

const listOfNames3 = (name, age) => {

}

const listOfNames4 = name => {
    console.log(name)
}

const square = num => num * num;

const helloPromise = () => {
    return new Promise( (resolve, reject) =>{
        if(false){
            resolve('Heeeey');
        }else{
            reject('Upsi dupsi');
        }
    });
}

helloPromise()
    .then( response => console.log(response))
    .then(() => console.log('omg?'))
    .catch( error => console.log(error))

// -------------------------

class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB
    }

}

const calc = new calculator();
console.log(calc.sum(7,2));
console.log(calc.sum(2,3));

// -------------------- 
// Módulos

const hello = require('./module')

console.log(hello())

// --------------------
// Generators

function* helloWordl(){
    if(true){
        // permite regresar algo
        yield 'Hello .. ';
    }
    if(true){
        yield '  Wordl';
    }
}

const generatorHello = helloWordl();

console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)