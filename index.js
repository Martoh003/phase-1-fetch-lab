function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!

}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();

});

function fetchBooks() {
  // Create a fetch request to the Game of Thrones API
  return fetch('https://anapioficeandfire.com/api/books')
    .then((response) => response.json()) // Convert the response to JSON
    .then((data) => renderBooks(data)); // Call renderBooks() with the JSON data as the argument
}
