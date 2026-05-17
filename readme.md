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

## Funciones

---
## Funcion declarativa
Forma clasica de crear una funcion 

```js
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(generarNumeroAleatorio(1, 100));
```

## Funcion expresada

```js
const numAzar = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const num = numAzar(1, 100);
console.log(num);
```

__Diferencia entre declarativa vs expresada__ -> Javascript lee de arriba hacia abajo antes de ejercutarse el navegador lo lee y despues que lo lee toda funcion que sea declarada lo tira para arriba, en cambio una funcion expresada no sirve 

## Funciones flecha 
Una expresion de funcion flecha es una alternativa compacta a una expresion de funcion tradicional 

```js
const numeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(numeroAleatorio(1, 100));
```

Una forma mas reducida es si estamos retornando algo sacar las llaves y el return ya que las funciones de flema son implicitas 

```js
const numeroAleatorio = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
console.log(numeroAleatorio(1, 100));
```
## Arrow y ForEach
ForEach es una forma de recorrer un array (una lista) y hacer algo con cada elemento, y
tambien podemos obtener su indice 

```js
const frutas = ['banana', 'maçã', 'laranja', 'uva', 'abacaxi'];
frutas.forEach((fruta, index) => console.log(fruta, index))
```

---

## Objetos 

---
## Objetos literal 
Se denomina objeto literal al objeto cuyas propiedades estan decladas textualmente en el codigo 

```js
const gato = {
    nome: "Mingau",
    edad: 3,
    raza: "Siames",
    enemigos: ["perros", "agua", "aspiradoras"],
    duerme: true
}
console.log(gato.name) // Primera forma de llamar una propiedad
console.log(gato["name"]) // segunda forma de llamar una propiedad
```

## Crud propiedades
__Crear una propiedad__ 
 ```js  
gato.color = "negro"
```
__Leer__ 
```js 
console.log(gato)
```
__Actualizar propiedad__
```js 
gato.edad = 11
```
__Eliminar propiedad__
```js 
delete gato.duerme
```

## HasOwnProperty
A veces es util comprobar si existe o no la propiedad de un objeto dado. Podemos utilizar el metodo .hasOwnProperty(propername) para determinar si un objeto tiene una propiedad con ese nombre .hasOwnProperty() devuelve __true__ o __false__ si se encuentra la propiedad o no.

```js 
const gato = {
    nome: "Mingau",
    edad: 3,
    raza: "Siames",
    enemigos: ["perros", "agua", "aspiradoras"],
    duerme: true
}

console.log(hasOwnProperty.call(gato, "nome")); // true | se puede definir asi
console.log(gato.hasOwnProperty("rezar")); // false | o se puede definir asi
```

## Encamidenamiento opcional 
El operador de encadenamiento opcional ? permite leer el valor de una propiedad ubicada dentro de una cadena de objetos conectados sin tener que validar expresamente que cada referencia en la cadena sea valida

```js 
const gato = {
    nome: "Mingau",
    edad: 3,
    raza: "Siames",
    enemigos: ["perros", "agua", "aspiradoras"],
    duerme: true
}

console.log(gato?.color); // como no existe da undefined
```
## Arrow function en propiedades y funciones comunes
En funciones comunes podemos acceder con this a propiedades de nuestro objetos, pero con arrows functions ya no

```js 
const gato = {
    nome: "Mingau",
    edad: 3,
    raza: "Siames",
    enemigos: ["perros", "agua", "aspiradoras"],
    duerme: true,
    comer(){
        console.log(`${this.nome} está comiendo.`); // Aquí, `this.nome` se refiere a la propiedad `nome` del objeto `gato.
    },
    comiendo2: () => {
        console.log(`${this.nome} está comiendo.`); // Aquí, `this.nome` no se refiere a la propiedad `nome` del objeto `gato`, sino que se refiere al contexto global (window en navegadores), lo que resultará en `undefined`.
    }
}

```

## Recorrer un objeto for in 
Es la instruccion for-in itera sobre todas las propiedades enumerables de un objeto que esta codificado por cadenas

```js 
const gato = {
    nome: "Mingau",
    edad: 3,
    raza: "Siames",
    enemigos: ["perros", "agua", "aspiradoras"],
}

for(let propiedad in gato) {
    console.log(propiedad);
    console.log(gato[propiedad]); 
}

```
## Object.value 
object.value devuelve un array con los valores correspondientes a las propiedades enumerables de un objeto 

```js 
console.log(Object.values(gato))
Object.values(gato).forEach((item) => {
    console.log(item)
})

```
## Desctruturing Objects y Alias 
__Desestructuracion__ la sintaxis de desestructuracion es una expresion de Javascript que permite desempacar valores de arreglos o propiedades de objetos en distintas variables.
__alias__ El alias es cuando tenemos una variable ya declarada con el mismo nombre entonces en la desestructuracion podemos cambiarle el nombre

```js 
const gato = {
    nome: "Mingau",
    edad: 3,
    raza: "Siames",
    enemigos: ["perros", "agua", "aspiradoras"],
}

const { nome, edad: age, raza } = gato
console.log(nome) // Mingau
console.log(age) // 3
console.log(raza) // Siames
```
## Valor vs Referencia
__Por valor__ Se copia el valor tal cual 
* si cambia la copia, no afecta al original number, string, boolean, null, undefined, symbol, bigint

```js 
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20
```

__Por referencia__ No se el copia el valor, se copia la referencia (direccion en memoria)
*Si cambias uno, afecta al otro porque apuntan al mismo lugar. Pasa con los arrays, y objetos, funciones

```js 
let obj1 = { nombre: "Juan" };
let obj2 = obj1;

obj2.nombre = "Pedro";

console.log(obj1.nombre); // Pedro
console.log(obj2.nombre); // Pedro
```

---

## Introduccion al DOM
---
_getElementById_ Devuelve una referencia al elemento por su id

```html
    <h1 id="title">Vinculando JavaScript</h1>
```

```js
    const title = document.getElementById("title")
```

- Podemos agregar, textContent, innerHTML

__querySelector__ Devuelve el primer elemento del documento que coincida con el grupo especificado de selectores

```html
    <h1 class="title">Vinculando JavaScript</h1>
```

```js
    const title = document.querySelector(".title")
```

- Con . especificamos clases con # especificamos si es id o la propia etiqueta h1

__querySelectorAll__ Agarra todas las concidencias si tenemos muchos divs o parramos con la misma class, o id etc

```html
<h1 class="title">Este va a ser el titulo</h1>  

<div class="container">
  <p class="title">Titulo 1</p>
  <p class="title">Titulo 2</p>
  <p class="title">Titulo 3</p>
</div>

<P class="title">parrafo cualquiera</P>
```

```js
const title = document.querySelectorAll(".title")
console.log(title);

```

-Si queremos obtener los de un bloque div tendriamos que poner div .title

## Create element 
__createElement__ el metodo document.createElement() crea un elemento HTML especificado por su tagName

```html
<ul class="lista">
    <li></li>
</ul>
```

```js
const lista = document.querySelector(".lista");
const li = document.createElement("li");
li.textContent = "Producto 1";
console.log(li)

```

## AppendChild
__appendChild__ Agrega un nuevo nodo al final de la lista de un elemento padre especificado

```js
const lista = document.querySelector(".lista");
const li = document.createElement("li");
li.textContent = "Producto 2";
lista.appendChild(li);
```

## InnerHTHML | reflow
se genera reflow Ocurre cuando el navegador debe procesar y dibujar parte o la totalidad de una pagina web nuevamente, como despues de una actualizacion en un sitio interactivo 

```js
const lista = document.querySelector(".lista");
const paises = ["Argentina", "Brasil", "Peru"]

paises.forEach((pais) => {
    lista.innerHTML += `<li>${pais}</li>`;
})
```

Y append tambien genera reflow peor hay que tener mas cuidado con Inner HTML

```js
const lista = document.querySelector(".lista");
const paises = ["Argentina", "Brasil", "Peru"]

paises.forEach(pais => {
    const li = document.createElement("li");
    li.textContent = pais;
    lista.appendChild(li);
})
```

## Fragment 
El fragment de documento no forma parte de la estrcutura de arbol del documento activo los cambios realizas en el fragmento no afectan al documento ni inciden en el rendimiento cuando se realizan cambios

```js
const lista = document.querySelector(".lista");
const paises = ["Argentina", "Brasil", "Peru"]

const fragmento = document.createDocumentFragment();

paises.forEach(pais => {
    const li = document.createElement("li");
    li.textContent = pais;
    fragmento.appendChild(li);
})

lista.appendChild(fragmento);
```

## InsertBefore y firtsChild
__InserBefore__ sirve para insertar algo antes de otro elemento 
__firtsChild__ Sirve para obtener el primer elemento o nodo dentro de otro

```js
const lista = document.querySelector(".lista");
const paises = ["Argentina", "Brasil", "Peru"]

const fragmento = document.createDocumentFragment();

paises.forEach(pais => {
    const newNodo = document.createElement("li");
    newNodo.textContent = pais;
    const referenciaNodo = fragmento.firstChild;
    fragmento.insertBefore(newNodo, referenciaNodo);
})

lista.appendChild(fragmento);
```

## Template
Es un mecanismo para mantener el contenido HTML del lado del cliente que no se renderiza cuando se carga una pagina. Piensa en la plantilla como un fragmento del contenido que esta siendo almacenado para un uso posterior en el documento. 

```html
 <ul class="ullista"></ul>

    <template id="templateLi">
        <li class="lista">
            <b>pais:</b>
            <span class="text-primary">Aqui va el pais: </span>
        </li>
    </template>
```

```js
const templateLi = document.getElementById("templateLi");
const ullista = document.querySelector(".ullista");

const paises = ["Argentina", "Brasil", "Chile", "Uruguay"];
const fragment = document.createDocumentFragment();


paises.forEach((pais) => {
const clone = templateLi.content.cloneNode(true);
 clone.querySelector(".text-primary").textContent = pais;
   fragment.appendChild(clone);
})

ullista.appendChild(fragment);
```

## FirtsElementChild

```js
const bloqueInvisible = document.getElementById("bloqueInvisible");
const listaUl = document.getElementById("listaUl");

const paises = ["Argentina", "Brasil", "Peru", "Colombia", "Chile"];
const fragment = document.createDocumentFragment();

const clickPais = () => console.log("Hiciste click en un pais");

paises.forEach((pais) => {
    const clone = bloqueInvisible.content.firstElementChild.cloneNode(true);
    clone.querySelector(".text-primary").textContent = pais;
    clone.addEventListener("click", clickPais);

    fragment.appendChild(clone);
})

listaUl.appendChild(fragment);
```
---

## Arrays 

---
Estos metodos no mutan el array original, sino que nos devuelve una copia

__map__ Itera sobre cada elemento de un arreglo y devuelve un nuevo arreglo que contiene los resultados de llamar a la funcion callback en cada elemento. Esto lo hace sin mutar al arreglo original.

```js
const usuarios = [
    {
        name: "Cristian",
        edad: 26,
        email: "crisludue5@gmail.com"
    },
    {
        name: "Micaela",
        edad: 19, 
        email: "micamoser06@gmail.com"
    },
    {
        name: "Federico",
        edad: 28,
        email: "fedealba@gmail.com"
    }
]

const obtenerUsuario = usuarios.map((user) => {
    return user.name
})

console.log(obtenerUsuario)
```

__Filter__ Sirve para crear un nuevo array con los elementos que cumplen una condicion 

```js
const usuarios = [
    {
        name: "Cristian",
        edad: 26,
        email: "crisludue5@gmail.com"
    },
    {
        name: "Micaela",
        edad: 19, 
        email: "micamoser06@gmail.com"
    },
    {
        name: "Federico",
        edad: 28,
        email: "fedealba@gmail.com"
    }
]

const userFiltrado = usuarios.filter((usuario) => usuario.name !== "Federico")
console.log(userFiltrado)
```

__find__ El metodo find() devuelve el valor del primer elemento del array que cumple la funcion de prueba proporcionada

```js
const usuarios = [
    {
        id: 1,
        name: "Cristian",
        edad: 26,
        email: "crisludue5@gmail.com"
    },
    {
        id: 2,
        name: "Micaela",
        edad: 19, 
        email: "micamoser06@gmail.com"
    },
    {
        id: 3,
        name: "Federico",
        edad: 28,
        email: "fedealba@gmail.com"
    }
]

const buscarUsuario = usuarios.find((usuario) => usuario.id === 1);
console.log(buscarUsuario);
```

__some__ El metodo some() comprueba si al menos un elemento del array cumple con la condicion implementada por la funcion proporcionada

```js
const usuarios = [
    {
        id: 1,
        name: "Cristian",
        edad: 26,
        email: "crisludue5@gmail.com"
    },
    {
        id: 2,
        name: "Micaela",
        edad: 19, 
        email: "micamoser06@gmail.com"
    },
    {
        id: 3,
        name: "Federico",
        edad: 28,
        email: "fedealba@gmail.com"
    }
]

const existe = usuarios.some((usuarios) => usuarios.id === 1);
console.log(existe);
```
__findIndex__ El metodo findIndex() devuelve el indice del primer elemento de un array que cumpla una funcion de prueba proporcionada. En caso contrario devuelve -1

```js
const usuarios = [
    {
        id: 1,
        name: "Cristian",
        edad: 26,
        email: "crisludue5@gmail.com"
    },
    {
        id: 2,
        name: "Micaela",
        edad: 19, 
        email: "micamoser06@gmail.com"
    },
    {
        id: 3,
        name: "Federico",
        edad: 28,
        email: "fedealba@gmail.com"
    }
]

const indice = usuarios.findIndex((usuario) => usuario.id === 2);
console.log(indice);
```

__Slice__ El metodo slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido). El array original no se modificara
array -> [nombre1, nombre2, nombre3, nombre3]
inicio -> desde donde empieza indice 0, 1,2,3 etc
fin -> donde termina elegis que empiece del 1, nombre2 y si decis que se termina en 2, no se cuenta el 2, es hasta 0,1, si elegis 3, entonces no se cuenta el 3, seria 0,1,2

```js
const arr = ["Junior", "Juliarts", "Oso", "Luna"]
const nuevoArray = arr.slice(1,2);
console.log(nuevoArray)
```

__concat__ el metodo concat se usa para unir dos o mas arrays. Este metodo no cambia los arrays existentes. Sino que devuelve un solo array

```js
const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];
const array3 = array1.concat(array2);
console.log(array3);
```

__Spread Operator__ Permite a un elemento iterable tal como un arreglo o cadena ser expandido en lugares donde son esperados

```js
const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];
const array3 = [...array1, ...array2];
console.log(array3); 
```

__reduce__ El metodo reduce ejecuta una funcion reductora sobre cada elemento de un array desolviendo como resultado un unico valor 
acomulador = 0 + valorActual = 1 
acomulador = 1 + valorActual = 2
acomulador = 3 + valorActual = 3
acomulador = 6 + valorActual = 4
acomulador = 10 + valorActual = 5

```js
const array1 = [1, 2, 3, 4, 5];
const resultado = array1.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(resultado); 
```

__Split__ El metodo split() divide un objeto de tipo string en un array mediante un separador

```js
const cadenaMeses = "Enero,Febrero,Marzo,Abril,Mayo,Junio,Julio,Agosto,Septiembre,Octubre,Noviembre,Diciembre";
const arrayMeses = cadenaMeses.split(",");
console.log(arrayMeses);
```

__join__ El metodo join convierte un array en una cadena de texto dividiendolo por , o - 

```js
const array = [1,2,3,4,5]
const convertirString = array.join(",")
console.log(convertirString)
```
---

## Dom Parte 2

---
## El burbujeo y la captura
El burbujeo y la captura de eventos son dos mecanismos que describen lo que sucede cuando dos controladores del mismo tipo de evento se activan en un elemento.

```html
  <div class="container">
    <div class="border border-primary border-5 py-5 m-3">
        lorem, ipsum dolor 
        <div class="border border-secondary border-5 py-5 m-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.
            <div class="border border-danger border-5 py-5 m-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.
            </div>
        </div>
    </div>
  </div>
```
---

Esto sucede cuando hacemos un addEventListener y se propaga de abajo hacia arriba del elemento nieto al elemento padre 

```js
const padre = document.querySelector(".border-primary");
const hijo = document.querySelector(".border-secondary");
const nieto = document.querySelector(".border-danger");

padre.addEventListener("click", (e) => {
    console.log("Padre");
})

hijo.addEventListener("click", (e) => {
    console.log("Hijo");
})

nieto.addEventListener("click", (e) => {
    console.log("Nieto");
})
```
---

## stopPropagation
Evita la propagacion adicional del evento actual en las fases de captura y bubbling 
e.stopProgation()

```js
const border = document.querySelectorAll(".border"); 

border.forEach((element) => {
    element.addEventListener("click", (e) => {
        e.stopPropagation()
        console.log("Me diste click")
    })
})
```
---

## Delegacion de eventos
La delegacion de eventos es basicamente un patron para manejar eventos de manera eficiente en lugar de agregar un detector de eventos a todos y cada uno de los elementos similares, podemos agregar un detector de eventos a un elemento principal y llamar a un evento en un objetivo particular utilizando la propiedad .target del objeto del evento. 

```html
  <div class="container">
    <div class="border border-primary border-5 py-5 m-3" id="padre" data-div="padre">
        lorem, ipsum dolor 
        <div class="border border-secondary border-5 py-5 m-3" id="hijo" data-div="hijo">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.
            <div class="border border-danger border-5 py-5 m-3" id="nieto" data-div="nieto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.
            </div>
        </div>
    </div>
  </div>
```

TENEMOS 3 METODOS PARA HACERLO

```js
const container = document.querySelector(".container");

container.addEventListener("click", (e) => {
    //Accedo mediante el ID al hijo 
    if (e.target.id === "hijo") {
        console.log("Hiciste click en el hijo");
    }

    //Accedo mediante la clase 
    if(e.target.matches(".border-primary")){
        console.log("Hiciste click en el padre")
    }

    //Accedo mediante el data set 
    if(e.target.dataset.div === "nieto"){
        console.log("Hiciste click en el nieto")
    }
})
```
---

## Formularios

---
## Expresiones regulares
Las expresiones regulares (a menudo llamadas RegExp o RegEx) son patrones que se utilizan para hacer coincidir combinaciones de caracteres en cadenas

__Exp. Regular: No acepta mayusculas__

```js
const regex = /^[a-z]+$/;
console.log(regex.test("acepta minisculas")); 
```

__Exp. Regular: No acepte minisculas__
```js
const regex = /^[^a-z]+$/;
console.log(regex.test("ACEPTA MAYUSCULAS")); 
```

__Exp. Regular: No acepta simbolos, signos, espacios, guiones, rayas__
```js
const regex = /^[a-zA-Z0-9]+$/;
console.log(regex.test("cris24"))
```

__Exp. Regular: Para que tome correos con terminacion de gmail.com__
```js
const regex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
console.log(regex.test("ludmila14@gmail.com"))
```

__Exp. Regular: Para que tome correos electronicos con cualquier terminacion__
```js
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(regex.test("cris@gmail.com"))
```

__Exp. Regular: Para validar una edad determinada del 1 al 100 sin caracteres__
```js
const regex = /^(100|[1-9][0-9]?)$/;
console.log(regex.test(69))
```

## Validacion de formulacion 
```html
<form id="formulario">
    <input 
        type="text"
        name="username" 
        placeholder="username" 
        autocomplete="off" 
        id="username"
        required
        minlength="3"
        maxlength="10"
        pattern="/^[a-zA-Z0-9]+$/"
    />
    <input 
        type="email"
        name="email" 
        placeholder="email"
        autocomplete="off"
            d="email"
        required
         pattenr="/^[^\s@]+@[^\s@]+\.[^\s@]+$/"
    />
    <button type="submit">Enviar</button>
</form>
```
Javascript
```js
const formulario = document.getElementById("formulario");

const username = document.getElementById("username");
const email = document.getElementById("email");

const expRegUsername = /^[a-zA-Z0-9]+$/; 
const expRegEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fragment = document.createDocumentFragment();

formulario.addEventListener("submit", (e) => {
    e.preventDefault(); 

    if(!expRegUsername.test(username.value)){
        console.log("username no valido")
        return
    }

    if(!expRegEmail.test(email.value)){
        console.log("email no valido")
        return
    }

    console.log("Formulario enviado correctamente")

})
```

## Formdata
```js
const formulario = document.getElementById("formulario");

const expRegUsername = /^[a-zA-Z0-9]+$/; 
const expRegEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fragment = document.createDocumentFragment();

formulario.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const formData = new FormData(formulario);
    const username = formData.get("username");
    const email = formData.get("email");

    if(!expRegUsername.test(username)){
        console.log("Username no valido")
        return 
    }

    if(!expRegEmail.test(email)){
        console.log("Email no valido")
        return
    }

    console.log("Formulario enviado correctamente")
})
```
---



