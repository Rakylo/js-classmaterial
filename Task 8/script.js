/* ------------------------------ TASK 13 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Person" (naudokite ES6), kuri sukuria objektus su šiais duomenimis:
- vardas (string)
- amžius (number)
- lytis (string)

Taip pat, klasė turėtų turėti metodą "introduce", kuris grąžina string, kuriame pateikiami šie duomenys:
"Pavadinimas: [vardas], Amžius: [amžius], Lytis: [lytis]".

Pavyzdinė objekto inicijavimo ir metodo kvietimo seka:
const person1 = new Person('John', 30, 'Vyras');
const introduction = person1.introduce();

Grąžinama reikšmė:
'Pavadinimas: John, Amžius: 30, Lytis: Vyras'
------------------------------------------------------------------------------------ */
class Person {
  constructor(vardas, amzius, lytis) {
    this.vardas = vardas;
    this.amzius = parseInt(amzius); // Convert 'amzius' to a number
    this.lytis = lytis;
  }

  introduce() {
    return `Pavadinimas: ${this.vardas}, Amžius: ${this.amzius}, Lytis: ${this.lytis}`;
  }
}

const person1 = new Person("John", "30", "Vyras"); // 'amzius' as a string
const introduction = person1.introduce();

console.log(introduction); // Result: 'Pavadinimas: John, Amžius: 30, Lytis: Vyras'
