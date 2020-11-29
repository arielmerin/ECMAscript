// -----------------
// Operador de reposo, selecciona las propiedades de un objeto que aún no se ha construido
const obj = {
    name: 'Ariel',
    age: 19,
    country: 'MX',
}

let {name, ...todito} = obj
console.log(name, todito)

// ------------------
// Con propagación, unir n objetos

const obj = {
    name: 'Ariel',
}

const obj1 = {
    country: 'MX',
}

const finaly = {
    ...obj,
    ...obj1,
    age: 19
}
console.log(finaly)


// ------------------
// Promise finally cuadno haya terminado el llamado

const helloWorld = () =>{
    return new Promise( (resolve, reject)=>{
        (true) 
        ? setTimeout(() => {
            resolve('Hola mundito kruel')
            }, 3000)
        : reject('Qué pedo banda apoko porque me ves así chiquito piensas que no aca')
    });
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(finalmente => console.log(finalmente))

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2020-04-05')
const year = match[1]
const month = match[2]
const day = match[3]

console.log(day, month, year)
