/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Book" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, author, pageCount
Metodas: 
isLong() - jeigu knygos puslapių skaičius bus daugiau nei 500, tada gražins true, kitu atveju false 
------------------------------------------------------------------------------------------------------ */

class Book {
  constructor(title, author, pageCount) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
  }

  getPages() {
    return this.pageCount > 500;
  }
}

const book1 = new Book("Sample Book", "John Author", 600);
const book2 = new Book("Short Book", "Alice Writer", 300);

console.log(book1.getPages()); // Grąžins true, nes daugiau nei 500 puslapiai
console.log(book2.getPages()); // Grąžins false, nes mažiau nei 500 puslapiai
