class Book {
  constructor(title, year, id, author) {
    this.title = title;
    this.year = year;
    this.id = id;
    this.author = author;
  }

  logTitle() {
    console.log(this.title);
  }
}

class Library {
  constructor(name, address) {
    this.name = name;
    this.address = address;
    this.books = [];
  }

  addNewBook(book) {
    this.books.push(book);
  }
  findBookByTitle(title) {
    return this.books.find((book) => book.title === title);
  }

  removeBookById(id) {
    const bookIndex = this.books.findIndex((book) => book.id === id);
    if (bookIndex !== -1) {
      this.books.splice(bookIndex, 1);
    } else {
      return "Knygos su tokiu id nera";
    }
  }
}

const martynoMazvydo = new Library("Martyno Mazvydo", "prie seimo");
const kvepalai = new Book("Kvepalai", 2000, 1, "kazkoks autorius");
const altoriuSesely = new Book("Altoriu Sesely", 1990, 2, "Kazkas");

martynoMazvydo.addNewBook(kvepalai);
martynoMazvydo.addNewBook(altoriuSesely);

// console.log(martynoMazvydo.findBookByTitle("Kvepalai"));
martynoMazvydo.removeBookById(1);
// console.log(martynoMazvydo);

class Animal {
  constructor(name) {
    this.name = name;
  }
  breathe() {
    console.log("I am breathing");
  }
}

class Mamal extends Animal {
  constructor(typeOfDrink, name) {
    super(name);
    this.typeOfDrink = typeOfDrink;
  }
  drink() {
    console.log("I am drinking milk");
  }
}
const karve = new Mamal("Vanduo", "Birtue");

karve.breathe();
karve.drink();
console.log(karve.typeOfDrink);
console.log(karve.name);

// altoriuSesely.logTitle();
// console.log(altoriuSesely.title);

// const kvepalai = new Book("Kvepalai");

// kvepalai.logTitle();
// console.log(kvepalai.title);
