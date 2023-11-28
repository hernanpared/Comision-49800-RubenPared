function rutinas() {
  let objetivo = Number(
    prompt(
      "Seleccione su objetivo ingresando el numero que corresponda \n 1.Hipertrofia \n 2.Fuerza \n 3.Descenso de peso"
    )
  );

  switch (objetivo) {
    case 1:
      alert(
        "\n Rutina de Hipertrofia :\n 1. Peso Muerto 4 x12rep \n 2. Hip Thrust 4 x12rep \n 3. Curl de Biceps 4 x12rep \n 4. Hip Thrust 4 x12rep \n En todos los ejercicios usar 75%1RM "
      );
      break;

    case 2:
        alert("\n Rutina de Resistencia a la Fuerza :\n 1. Press de Banca 4 x12rep \n 2. Triceps c/polea 4 x12rep \n 3. Dorsales c/mancuerna 4 x12rep \n 4. Hip Thrust 4 x12rep \n En todos los ejercicios usar 85%1RM ");
    break;

    case 3:
        alert("\n Rutina de descenso de peso :\n 1. Prensa 4 x12rep \n 2. Curl de Biceps 4 x12rep \n 3. Bicicleta Fija 15 min \n 4. Caminador 15 min \n En todos los ejercicios usar 60%1RM ");
    break;

    default:
        alert("Opcion incorrecta, por favor vuelva a ingresar una opcion valida");
  }
}
