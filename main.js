class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratingsArray = [];
  }
  // getters
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratingsArray() {
    return this._ratingsArray;
  }
  // setters
  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }

  getAverageRating() {
    return (
      this.ratingsArray.reduce((x, y) => x + y) / this._ratingsArray.length
    );
  }

  toggleCheckOutStatus() {
    this.isCheckedOut = !this.isCheckedOut;
  }

  addRating(rating) {
    this.ratingsArray.push(rating);
  }
}

class Book extends Media {
  constructor(title, ratingsArray, author, pages) {
    super(title);
    this._ratingsArray = ratingsArray;
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }
  get pages() {
    return this._pages + " Pages";
  }
}

class Movie extends Media {
  constructor(title, ratingsArray, director, runTime) {
    super(title);
    this._ratingsArray = ratingsArray;
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime + " Minutes";
  }
}

class CD extends Media {
  constructor(title, ratingsArray, artist, songs) {
    super(title);
    this._ratingsArray = ratingsArray;
    this._artist = artist;
    this._songs = songs;
  }
  get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs + " # of Songs";
  }
}

// # CHATGPT TESTS # //
// Create a new book instance
const The_Great_Gatsby = new Book(
  "The Great Gatsby",
  [5, 4, 3, 2, 5],
  "F. Scott Fitzgerald",
  180
);

// Check the book's properties
console.log(The_Great_Gatsby.title); // Output: The Great Gatsby
console.log(The_Great_Gatsby.pages); // Output: 180 Pages
console.log(The_Great_Gatsby.author); // Output: F. Scott Fitzgerald
console.log(The_Great_Gatsby.isCheckedOut); // Output: false

// Toggle the checkout status and check again
The_Great_Gatsby.toggleCheckOutStatus();
console.log(The_Great_Gatsby.isCheckedOut); // Output: true

// Get the average rating
console.log(The_Great_Gatsby.getAverageRating()); // Output: 3.8

The_Great_Gatsby.addRating(1);
The_Great_Gatsby.addRating(1);
The_Great_Gatsby.addRating(5);
console.log(The_Great_Gatsby.getAverageRating()); // Output: 3.25

// Create a new movie instance
const Inception = new Movie(
  "Inception",
  [5, 5, 4, 4, 3],
  "Christopher Nolan",
  148
);

// Check the movie's properties
console.log(Inception.title); // Output: Inception
console.log(Inception.runTime); // Output: 148 Minutes
console.log(Inception.director); // Output: Christopher Nolan
console.log(Inception.isCheckedOut); // Output: false

// Toggle the checkout status and check again
Inception.toggleCheckOutStatus();
console.log(Inception.isCheckedOut); // Output: true

// Get the average rating
console.log(Inception.getAverageRating()); // Output: 4.2

Inception.addRating(1);
Inception.addRating(1);
Inception.addRating(5);
console.log(Inception.getAverageRating()); // Output: 3.5

// Create a new CD instance
const Thriller = new CD("Thriller", [4, 5, 4, 3, 5], "Michael Jackson", 9);

// Check the CD's properties
console.log(Thriller.title); // Output: Thriller
console.log(Thriller.songs); // Output: 9 # of Songs
console.log(Thriller.artist); // Output: Michael Jackson
console.log(Thriller.isCheckedOut); // Output: false

// Toggle the checkout status and check again
Thriller.toggleCheckOutStatus();
console.log(Thriller.isCheckedOut); // Output: true

// Get the average rating
console.log(Thriller.getAverageRating()); // Output: 4.2
Thriller.addRating(1);
Thriller.addRating(1);
Thriller.addRating(5);
console.log(Thriller.getAverageRating()); // Output: 3.5
