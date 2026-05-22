const form = document.querySelector(".form");
const usernameInput = document.getElementById("username");
const telefonoInput = document.getElementById("telefono");
const emailInput = document.getElementById("email");
const countryInput = document.getElementById("country");
const passwordInput = document.getElementById("password");
const rePasswordInput = document.getElementById("rePassword");
const containerUsername = document.getElementById("containerUsername");
const containerPhone = document.getElementById("containerPhone");
const containerEmail = document.getElementById("containerEmail");
const containerCountry = document.getElementById("containerCountry");
const containerPassword = document.getElementById("containerPassword");
const containerRePassword = document.getElementById("containerRePassword");
const body = document.getElementById("body");

const validaUsername = /^[a-zA-Z0-9]+$/;
const validaTelefono = /^\d{7,15}$/;
const validaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const validaPaises =
  /^(Argentina|Uruguay|Bolivia|Peru|Venezuela|Colombia|Uruguay)$/;
const validaPassword =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._-])[A-Za-z\d@$!%*?&._-]{8,20}$/;

let flag = false;

const msgError = (idE, idC, msg, container) => {
  const obtenerIdError = document.getElementById(idE);
  const obtenerIdCorrecto = document.getElementById(idC);

  if (obtenerIdCorrecto) {
    obtenerIdCorrecto.style.display = "none";
  }

  if (obtenerIdError) {
    obtenerIdError.textContent = msg;
    obtenerIdError.style.display = "block";
  } else {
    const p = document.createElement("p");
    p.id = idE;
    p.classList.add("validacion");
    p.classList.add("rojo");
    p.textContent = msg;
    container.appendChild(p);
  }
};

const msgCorrecto = (idE, idC, msg, container) => {
  const obtenerIdError = document.getElementById(idE);
  const obtenerIdCorrecto = document.getElementById(idC);

  if (obtenerIdError) {
    obtenerIdError.style.display = "none";
  }

  if (obtenerIdCorrecto) {
    obtenerIdCorrecto.textContent = msg;
    obtenerIdCorrecto.style.display = "block";
  } else {
    const p = document.createElement("p");
    p.id = idC;
    p.classList.add("validacion");
    p.classList.add("verde");
    p.textContent = msg;
    container.appendChild(p);
  }
};

const pintarAlerta = () => {
  if (flag === true) {
    const alerta = document.createElement("div");
    alerta.textContent = "✅ Formulario validado correctamente";
    alerta.id = "alertaVerde";
    alerta.classList.add("alert", "show", "alertaVerde");
    body.appendChild(alerta);
  } else {
    const alerta = document.createElement("div");
    alerta.textContent = "❌ Todavia faltan campos";
    alerta.id = "alertaRoja";
    alerta.classList.add("alert", "show", "alertaRoja");
    body.appendChild(alerta);
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    !validaUsername.test(usernameInput.value) ||
    !usernameInput.value.trim()
  ) {
    msgError(
      "eUsername",
      "cUsername",
      "No se permiten letras, números y guiones bajos (_).",
      containerUsername,
    );
    flag = false;
  } else {
    msgCorrecto(
      "eUsername",
      "cUsername",
      "Username correcto",
      containerUsername,
    );
    flag = true;
  }

  if (
    !validaTelefono.test(telefonoInput.value) ||
    !telefonoInput.value.trim()
  ) {
    msgError(
      "ePhone",
      "cPhone",
      "No se permiten letras, ni numeros cortos",
      containerPhone,
    );
    flag = false;
  } else {
    msgCorrecto(
      "ePhone",
      "cPhone",
      "Numero de telefono valido",
      containerPhone,
    );
    flag = true;
  }

  if (!validaEmail.test(emailInput.value) || !emailInput.value.trim()) {
    msgError(
      "eEmail",
      "cEmail",
      "Correo Electronico no valido",
      containerEmail,
    );
    flag = false;
  } else {
    msgCorrecto(
      "eEmail",
      "cEmail",
      "Correo Electronico correcto",
      containerEmail,
    );
    flag = true;
  }

  if (!validaPaises.test(countryInput.value) || !countryInput.value.trim()) {
    msgError("eCountry", "cCountry", "Seleccione un pais", containerCountry);
    flag = false;
  } else {
    msgCorrecto("eCountry", "cCountry", "Pais seleccionado", containerCountry);
    flag = true;
  }

  if (
    !validaPassword.test(passwordInput.value) ||
    !passwordInput.value.trim()
  ) {
    msgError(
      "ePassword",
      "cPassword",
      "Min 1 mayusculas, min 1 Miniscula, min 1 numero, min 1 caracter especial",
      containerPassword,
    );
    flag = false;
  } else {
    msgCorrecto(
      "ePassword",
      "cPassword",
      "Password correcto",
      containerPassword,
    );
    flag = true;
  }

  if (rePasswordInput.value.trim()) {
    if (rePasswordInput.value.trim() !== passwordInput.value.trim()) {
      msgError(
        "eRePassword",
        "cRePassword",
        "La contraseña no coincide",
        containerRePassword,
      );
      flag = false;
    } else {
      msgCorrecto(
        "eRePassword",
        "cRePassword",
        "Contraseña confirmada",
        containerRePassword,
      );

      flag = true;
    }
  } else {
    msgError(
      "eRePassword",
      "cRePassword",
      "No Coinciden las contraseñas",
      containerRePassword,
    );

    flag = false;
  }

  pintarAlerta();
});
