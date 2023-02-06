/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   return x == y? true : false
}

function tienenMismaLongitud(str1, str2) {

   if (str1.length == str2.length) {return true }
   else {return false}
}

function menosQueNoventa(num) {

  return num<90? true : false
}

function mayorQueCincuenta(num) {
   return num>50? true : false

}

function esPar(num) {
   if (num % 2 == 0) {return true }
   else {return false}
}

function esImpar(num) {
   if (num % 2 == 1) {return true }
   else {return false}
 }

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
