/*
 *promesas escritas


console.log("primer console log");
function waitNSeconds(seconds) {
  console.log("primer consolle log dentro de la def");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const state = true;
      if (state) {
        resolve("la peticion fue exitosa");
      } else {
        resolve("la peticion fracaso");
      }
      seconds * 1000;
    });
  });
}

console.log("fuera de la def");
waitNSeconds(12);
 */

/*
 *promesas manejadas
 */
