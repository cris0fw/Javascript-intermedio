const form = document.querySelector(".form");
const usernameInput = document.getElementById("username");
const telefonoInput = document.getElementById("telefono");
const containerUsername = document.getElementById("containerUsername");
const containerPhone = document.getElementById("containerPhone");

const validaUsername = /^[a-zA-Z0-9]+$/;
const validaTelefono = /^\d{7,15}$/;

const crearParrafoMessage = (message, color, container, id) => {
  const obtenerId = document.getElementById(id);

  if (!obtenerId) {
    const p = document.createElement("p");
    p.id = id;
    p.classList.add("validacion");
    p.classList.add(color);
    p.textContent = message;
    container.appendChild(p);
  }

  obtenerId.classList.remove("rojo", "verde");
  obtenerId.classList.add(color);
  obtenerId.textContent = message;
};

// const pasoValidacion = (message, id) => {
//   const obtenerIdParrafo = document.getElementById(id);
//   obtenerIdParrafo.textContent = message;
//   obtenerIdParrafo.classList.remove("rojo");
//   obtenerIdParrafo.classList.add("verde");
// };

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    !validaUsername.test(usernameInput.value) ||
    !usernameInput.value.trim()
  ) {
    crearParrafoMessage(
      "Username incorrecto",
      "rojo",
      containerUsername,
      "pUsername",
    );
  } else {
    crearParrafoMessage(
      "Username correcto",
      "verde",
      containerUsername,
      "pUsername",
    );
  }

  if (
    !validaTelefono.test(telefonoInput.value) ||
    !telefonoInput.value.trim()
  ) {
    crearParrafoMessage("Phone incorrecto", "rojo", containerPhone, "pPhone");
  } else {
    crearParrafoMessage("Phone correcto", "verde", containerPhone, "pPhone");
  }

  // pasoValidacion("Usuario correcto", "pUsername");
});
