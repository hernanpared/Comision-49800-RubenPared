function imc() {
  let masa = parseFloat(prompt("Ingrese su peso en kilogramos"));
  let estatura = parseFloat(prompt("Ingrese su estatura en metros"));

  let resultado = masa / (estatura ^ 2);

  alert(`Su IMC es: ${resultado}`);

  if (resultado <= 18.5) {
    alert("Usted tiene Bajo Peso");
  } else if (resultado >= 18.5 && resultado <= 24.9) {
    alert("Usted tiene un Peso Saludable");
  } else if (resultado >= 25 || resultado <= 29.9) {
    alert("Usted tiene sobrepeso");
  } else{
    alert("Usted tiene Obesidad");
  }

  alert("Segui navegando y encontra tu rutina perfecta!!!");
}


