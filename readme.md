# Javascript Intermedio

--- 
## Template strings o backticks

Los templates strings sirven para __armar textos__ de forma mas comoda y dinamica.
1. Meter variables facil dentro de un texto, tambien con metodos
2. varias lineas
3. ejecutar logica dentro del texto

```js
  let usuario = "Cris0fw"
  console.log(`Bienvenido ${usuario} a tu perfil de GitHub`)
```

## Diferencia entre Var, Let y Const 
__VAR__ -> Si declaramos dos variables ambas pueden ser declaradas 

```js
 var usuario = "Usuario1";
 var usuario = "Usuario2";

 console.log(usuario); // Imprime "Usuario2"
```

__LET__ -> No nos permite crear dos veces la misma variable, si nos deja sobre escriir el valor

```js
let usuario = "usuario1";
 usuario = "usuario2";

console.log(usuario);
```

__CONST__ -> En const por mas que querramos sobre escribir un valor nos va a dar error

```js
const usuario = "usuario1";
 usuario = "usuario2";

console.log(usuario);
```

## SCOPE
En el scope basicamente con var si hacemos un if y declaramos una variable estado tanto afuera del if como dentro del if sobreescribiria el valor, en cambio con let es diferente porque las variables solo viven dentro del bloque {} donde fueron creadas, lo mismo sucede con const 

```js
  let estado = true 

if(estado){
    let estado = false
    console.log("esta activo");
}

console.log(estado)
```
---

## Arrays 

---
## Array vs const 
Los objetos incluidos los arreglos y las funciones asignados a una variable mediante el uso const siguen siendo mutables. El uso de const solo evita la reasignacion idel identificador de la variable

```js
const myArray = []

myArray[0] = 'Hello'
myArray[1] = 'World'

console.log(myArray) // Output: ['Hello', 'World']
```

## Array(Push, Pop, Shift, unshift)

__push()__ -> El metodo push añade uno o mas elementos al final de un array y devuelve la nueva longitud del array 

```js
const frutas = ["pera", "frutilla"]
frutas.push("manzana")
console.log(frutas)
```

__unshift()__ -> agrega uno o mas elementos al inicio del array y devuelve la nueva longitud del array

```js
const frutas = ["pera", "frutilla"]
frutas.unshift("manzana")
console.log(frutas)
```

__pop()__ -> El metodo pop elimina el ultimo elemento de un array y lo devuelve. Este metodo cambia la longitud del array

```js
const frutas = ["pera", "frutilla"]
const frutaeliminada = frutas.pop()
console.log(frutas) // Output: ["pera"]
console.log(frutaeliminada) // Output: "frutilla"
```

__shift()__ -> Elimina el primer elemento del array y lo retorna. Este metodo modifica la longitud del array 

```js
const frutas = ["pera", "frutilla"]
const frutaeliminada = frutas.shift()
console.log(frutaeliminada) // Output: "pera"
console.log(frutas) // Output: ["frutilla"]
```

---