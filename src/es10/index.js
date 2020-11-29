let array = [1,2,3, [1,2,3, [1,3,4]]];

console.log(array.flat(array.length))



// omggggggggggg mapear todo, aplanarlo y saver qué vergas hace
let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value*2]))

// Eliminar espacios en blanco de un string

let hello = '                 WORDL';
console.log(hello)

console.log(hello.trimStart())

let wordl = 'wordl           '
console.log(wordl)

console.log(wordl.trimEnd())

// El error en catch es opcional


// omggggggg esto sirve para hace arreglos a objetos

let entries = [['name', 'arielin'], ['eda', 19]]

console.log(Object.fromEntries(entries))

// Objeto de tipo símbolo

let mySmbol = 'my simbolito'

let symbol = Symbol(mySmbol)
console.log(symbol.description)