const botonFruta = document.querySelectorAll("#botonFruta");
const carritoBody = document.getElementById("carritoBody");
const templateProducts = document.getElementById("templateProducts");
const fragment = document.createDocumentFragment();

let carrito = [];

const agregarCarrito = (e) => {
 const producto = {
  id: e.target.dataset.fruta,
  title: e.target.dataset.fruta,
  quantity: 1
 }

 const productExiste = carrito.find((item) => item.id === producto.id)

 if(productExiste){
  productExiste.quantity++;
 } else {
  carrito.push(producto);
 }

 pintarCarrito(carrito); 
}

const pintarCarrito = (carrito) => {
  carritoBody.textContent = "";

  carrito.map((producto) => {
    const clone = templateProducts.content.firstElementChild.cloneNode(true); 
    clone.querySelector(".name").textContent = producto.title; 
    clone.querySelector(".quantity").textContent = producto.quantity; 
    fragment.appendChild(clone);
  })

  carritoBody.appendChild(fragment);
}

botonFruta.forEach((boton) => {
  boton.addEventListener("click", agregarCarrito);
})


