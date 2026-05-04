const array = []

const frutas = prompt("¿Cuántas frutas quieres agregar?")

array.push(frutas)

while(confirm("¿Quieres agregar otra fruta?")) {
    const frutas = prompt("¿Qué fruta quieres agregar?")
    array.push(frutas)
}

console.log("compraste: " + array)

for(const fruta of array) {
    console.log(fruta)
}


