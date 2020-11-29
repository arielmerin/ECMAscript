
// -------------------
// Cómo ordena las variables en un arreglo
const data = {
    frontend: 'Arielin', 
    backend: 'Ari',
    design: 'Ariel'
}
const entries = Object.entries(data)
console.log(entries)
console.log(entries.length)

// --------------------
// Object values, regresa los valores de un objeto a un arreglo, ojo sólo los valores

const data = {
    frontend: 'Arielin', 
    backend: 'Ari',
    design: 'Ariel'
}
const values = Object.values(data)
console.log(values)

const hello = 'hello';
console.log(hello.padStart(19,'keubo'))

console.log(hello.padEnd(25, ' hi bebe'))

// -------------------
// Trailing commas
const data= {
    front:'Alej', // Puede existir
    back: 'Rel'
}


const helloWordl = () =>{
    return new Promise((resolve, reject) =>{
        if(false){
            setTimeout(() => resolve('Hello Wordl'), 3000)
        }else{
            reject(new Error('Test Error'))
        }
    })
};

const helloAsync = async () =>{
    const hello = await helloWordl();
    console.log(hello)
}

helloAsync()

const anotherFunction = async () => {
    try{
        const hello = await helloWordl();
        console.log(hello)
    }catch(err){
        console.log('olibb')
    }
}
anotherFunction()