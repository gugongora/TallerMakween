function validarFormulario() {
  function mostrarAlerta(tipo, mensaje) {
    const alertaDiv = document.getElementById("alerta");
    alertaDiv.classList.remove("alert-success", "alert-danger"); // Limpiar clases anteriores
    alertaDiv.classList.add("alert-" + tipo);
    alertaDiv.innerHTML = `
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        ${mensaje}
    `;
    alertaDiv.style.display = "block";
  }

  if (
    validarEmail() &&
    validarRUT() &&
    validarEdad &&
    validarNombre(1) &&
    validarNombre(2) &&
    validarNombre(3) &&
    validarCelular() &&
    validarSexo()
  ) {
    mostrarAlerta("success", "¡Todo correcto!");
    return true;
  } else {
    mostrarAlerta("danger", "¡Hay errores en el formulario!");
    return false;
  }
}

function validarEmail() {
  var email = document.getElementById("inputEmail").value;

  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return re.test(email);
}

function validarNombre(tipo) {
  var nombre;

  switch (tipo) {
    case 1: {
      nombre = document.getElementById("inputNombre").value;
      break;
    }
    case 2: {
      nombre = document.getElementById("inputPaterno").value;
      break;
    }
    case 3: {
      nombre = document.getElementById("inputMaterno").value;
      break;
    }
  }

  var boton;
  boton = document.getElementById("botonFormulario");

  if (nombre.length >= 3 && nombre.length <= 20) {
    return true;
  } else {
    return false;
  }
}

function validarEdad() {
  var fecha_nacimiento;
  var fecha_actual = new Date();
  fecha_nacimiento_str = document.getElementById("inputNacimiento").value;
  fecha_nacimiento = new Date(fecha_nacimiento_str);
  var diferencia = fecha_actual.getTime() - fecha_nacimiento.getTime();
  var edad = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365));
  console.log("La edad es: " + edad);

  if (edad >= 18 && edad <= 35) {
    return true;
  } else {
    return false;
  }
}

function validarCelular() {
  var celular = document.getElementById("inputCelular").value;

  if (celular >= 100000000 && celular <= 999999999) {
    return true;
  } else {
    return false;
  }
}

function validarSexo() {
  var genero = document.getElementById("inputSexo").value;

  if (genero == "Hombre" || genero == "Mujer") {
    return true;
  } else {
    return false;
  }
}

function validarRUT() {
  var rut = document.getElementById("inputRut").value;

  var guion = rut.charAt(rut.length - 2);
  var dv = rut.charAt(rut.length - 1);

  if (
    guion == "-" &&
    /^[0-9K]$/.test(dv) &&
    rut.length >= 9 &&
    rut.length <= 10
  ) {
    return true;
  } else {
    return false;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Obtener el botón "Carta" por su clase
  var botonCarta = document.querySelector(
    "button[data-bs-target='#exampleModalToggle']"
  );

  // Agregar un evento de escucha para el evento "click" del botón "Carta"
  botonCarta.addEventListener("click", function () {
    if (validarFormulario()) {
      // Obtener los valores de los campos del formulario
      var nombre = document.getElementById("inputNombre").value;
      var paterno = document.getElementById("inputPaterno").value;
      var materno = document.getElementById("inputMaterno").value;
      var email = document.getElementById("inputEmail").value;
      var celular = document.getElementById("inputCelular").value;
      var fecha_nacimiento_str =
        document.getElementById("inputNacimiento").value;
      var rut = document.getElementById("inputRut").value;
      var genero = document.getElementById("inputSexo").value;

      // Concatenar los valores y asignarlos al textarea
      var textareaCarta = document.getElementById("carta");
      textareaCarta.value =
        "Nombre: " +
        nombre +
        "\n" +
        "Apellido Paterno: " +
        paterno +
        "\n" +
        "Apellido Materno: " +
        materno +
        "\n\n" +
        "Fecha de Nacimiento: " +
        fecha_nacimiento_str +
        "\n" +
        "RUT: " +
        rut +
        "\n\n" +
        "Género: " +
        genero +
        "\n" +
        "Email: " +
        email +
        "\n" +
        "Celular: " +
        celular;
    } else {
      // Mostrar un mensaje de error si el formulario está incompleto
      var textareaCarta = document.getElementById("carta");
      textareaCarta.value = "El formulario está incompleto.";
    }
  });
});
