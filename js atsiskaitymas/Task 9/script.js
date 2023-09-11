/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kitu atveju false 
------------------------------------------------------------------------------------------------------ */

class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
  }

  wasExpensive() {
    return this.budget > 100000000;
  }
}

const movie1 = new Movie("Batman Begins", "Christopher Nolan", 150000000);
const movie2 = new Movie(
  "Nobody Wanted to Die",
  "Vytautas Žalakevičius",
  140000
);

console.log(movie1.wasExpensive());

console.log(movie2.wasExpensive());
