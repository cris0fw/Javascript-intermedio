import allProducts from "../javascript/Products.js";
const menu = document.getElementById("menu");
const navMobile = document.querySelector(".navMobile");
const templateproduct = document.getElementById("templateproduct").content;
const containerProducts = document.querySelector(".containerProducts");
const templatecart = document.getElementById("templatecart").content;
const containerCart = document.querySelector(".cart");
const containerFilter = document.querySelector(".containerFilter");
const contentFilter = document.querySelector(".contentFilter");

const fragment = document.createDocumentFragment();

let menuActived = false;
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const guardarStorage = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

menu.addEventListener("click", (e) => {
  if (!menuActived) {
    navMobile.style.display = "block";
    menuActived = true;
  } else {
    navMobile.style.display = "none";
    menuActived = false;
  }
});

const filtrarProductosCarrito = (e) => {
  e.preventDefault();
  if (e.target.id === "botondefiltro") {
    const cardFilter = e.target.closest(".cardFilter");
    const title = cardFilter.querySelector(".productsfilter h2").textContent;

    const productsFilter = allProducts.filter((item) => item.tag === title);
    renderProducts(productsFilter);
  }
};

const visualizarTodosProductos = (e) => {
  e.preventDefault();
  if (e.target.id === "all") {
    renderProducts(allProducts);
  }
};

containerFilter.addEventListener("click", (e) => {
  filtrarProductosCarrito(e);
});

contentFilter.addEventListener("click", (e) => {
  visualizarTodosProductos(e);
});

const renderProducts = (products) => {
  containerProducts.textContent = "";

  products.map((item) => {
    const clone = templateproduct.firstElementChild.cloneNode(true);
    const image = clone.querySelector(".cardProduct img");
    image.src = `../images/${item.image}`;
    image.name = item.name;
    clone.querySelector(".contentTitlecontent h3").textContent = item.tag;
    clone.querySelector(".contenticonprice p").textContent = item.range;
    clone.querySelector(".cardProduct div h2").textContent = item.title;
    clone.querySelector(".cardProduct div p").textContent = item.price;
    clone.dataset.id = item.id;
    fragment.appendChild(clone);
  });

  containerProducts.appendChild(fragment);
};

document.addEventListener("DOMContentLoaded", (e) => {
  renderProducts(allProducts);
});

const sumarRestar = (e) => {
  if (e.target.matches(".agregar")) {
    const card = e.target.closest(".itemsCart");
    const title = card.querySelector(".cart-item .cartProduct p").textContent;

    const findProductTitle = cart.find((item) => item.title === title);

    if (findProductTitle) {
      findProductTitle.quantity++;
    }
  }

  if (e.target.matches(".restar")) {
    const card = e.target.closest(".itemsCart");
    const title = card.querySelector(".cart-item .cartProduct p").textContent;

    const findProductTitle = cart.find((item) => item.title === title);

    if (findProductTitle) {
      if (findProductTitle.quantity > 1) {
        findProductTitle.quantity--;
      } else {
        cart = cart.filter((item) => item.id !== findProductTitle.id);
      }
    }
  }

  guardarStorage();
  pintarProductos();
};

const pintarProductos = () => {
  containerCart.textContent = "";

  if (cart.length === 0) {
    const ceroProducts = document.createElement("p");
    ceroProducts.classList.add("nohayproducts");
    ceroProducts.innerHTML = `No hay Productos :(`;
    containerCart.appendChild(ceroProducts);
  } else {
    cart.map((item) => {
      const clone = templatecart.firstElementChild.cloneNode(true);
      const image = clone.querySelector(".cart-item img");
      image.src = `../images/${item.image}`;
      image.name = item.name;
      clone.querySelector(".cart-item .cartProduct p").textContent = item.title;
      clone.querySelector(
        ".cart-item .cartProduct .cartButtons p",
      ).textContent = item.quantity;
      clone.querySelector(".cart-item .cartProduct span").textContent =
        `$ ${item.price * item.quantity}`;
      fragment.appendChild(clone);
    });

    containerCart.appendChild(fragment);
  }

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const p = document.createElement("p");
  p.classList.add("total");
  p.innerHTML = `$Total: ${total}`;
  containerCart.appendChild(p);
};

const agregarCarrito = (e) => {
  if (e.target.matches(".agregarCart")) {
    const card = e.target.closest(".cardProduct");
    const id = parseInt(card.dataset.id);

    const findProduct = allProducts.find((item) => item.id === id);

    const findCartProduct = cart.findIndex(
      (item) => item.id === findProduct.id,
    );

    if (findCartProduct === -1) {
      cart.push({
        ...findProduct,
        quantity: 1,
      });
    } else {
      cart[findCartProduct].quantity++;
    }

    const total = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );

    guardarStorage();
    pintarProductos();
  }
};

containerCart.addEventListener("click", (e) => {
  sumarRestar(e);
});

containerProducts.addEventListener("click", (e) => {
  agregarCarrito(e);
});
