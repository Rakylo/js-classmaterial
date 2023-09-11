/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

// ES5
function Calculator() {
  this.sum = function (a, b) {
    return a + b;
  };

  // subtraction()
  this.subtraction = function (a, b) {
    return a - b;
  };

  // multiplication()
  this.multiplication = function (a, b) {
    return a * b;
  };

  // division()
  this.division = function (a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      throw new Error("Dalyba iš nulio negalima.");
    }
  };
}

let calculator = new Calculator();
// pvz
console.log("Suma: " + calculator.sum(5, 3)); //
console.log("Skirtumas: " + calculator.subtraction(5, 3));
console.log("Daugyba: " + calculator.multiplication(5, 3));
console.log("Dalyba: " + calculator.division(10, 2));
