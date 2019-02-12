// Write a JavaScript program to display the reading status(i.e.display book name, author name and reading status) of the following books.
let library = [
  { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
  { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false
  }
];

const display = theArray => {
  if (!Array.isArray(theArray)) {
    return;
  }
  theArray.forEach(element => {
    console.log(element.author);
    console.log(element.title);
    console.log(element.readingStatus);
  });
};
display(library);

// Write a JavaScript program which returns a subset of a string.
// Sample Data: dog Expected Output: ["d", "do", "dog", "o", "og", "g"]
