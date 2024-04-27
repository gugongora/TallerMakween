function validarRut() {}

function validarFormulario()
{
  /*if(validarEmail())
  {
    console.log("correo bien");
  }

  if(validarRUT())
  {
    console.log("rut bien");
  }

  if(validarEdad())
  {
    console.log("edad bien");
  }
  if(validarNombre(1))
  {
    console.log("nombre bien");
  }
  if(validarCelular())
  {
    console.log("celular bien");
  }
  if(validarSexo())
  {
    console.log("sexo bien");
  }*/

  if(validarEmail() && validarRUT() && validarEdad && validarNombre(1) && validarNombre(2) && validarNombre(3) && validarCelular() && validarSexo())
  {
    console.log("todo correcto");
    return true;
  }
  else{
    console.log("hay error en el formulario");  
    return false;
  }
}

function validarEmail()
{
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
  }
  else{
    return false;;
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


  if(edad >= 18 && edad <= 35)
  {
    return true;
  }
  else{
    return false;
  }

}

function validarCelular() {

  var celular = document.getElementById("inputCelular").value;

  if(celular >= 100000000 && celular <= 999999999)
  {
    return true;
  }
  else{
    return false;
  }

}

function validarSexo()
{

  var genero = document.getElementById("inputSexo").value;


  if(genero == "Hombre" || genero == "Mujer")
  {
    return true;
  }
  else{
    return false;
  }
}

function validarRUT()
{

  var rut = document.getElementById("inputRut").value;

  var guion = rut.charAt(rut.length-2);
  var dv = rut.charAt(rut.length-1);

  if(guion == '-' && /^[0-9K]$/.test(dv) && (rut.length >= 9 && rut.length <= 10))
  {
    return true;
  }
  else{
    return false;
  }


}


function generarCarta()
{
  if(validarFormulario())
  {
    
  }
}