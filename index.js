// index.js

// This function is likely provided as an empty stub in your lab's index.js
function fetchBooks() {
    // 1. Make the fetch request to the Game of Thrones API
    // 2. Convert the response to JSON
    // 3. Call renderBooks() with the JSON data
    // 4. IMPORTANT: Return the fetch() call itself

    return fetch("https://anapioficeandfire.com/api/books")
        .then(response => response.json()) // Convert the response body to JSON
        .then(booksJson => {
            console.log("Fetched Books (JSON):", booksJson); // Optional: for debugging, see the data
            renderBooks(booksJson); // Call renderBooks with the parsed JSON data
            return booksJson; // You might want to return the JSON for further chaining if needed, but not required by test
        });
}

// This function is also likely provided in your lab's index.js
// You don't need to modify this unless specific instructions for it are given.
// It will take the JSON data and display it on the webpage.
function renderBooks(books) {
    const appDiv = document.getElementById('app'); // Assuming your index.html has a div with id="app"
    if (!appDiv) {
        console.error("Element with id 'app' not found. Cannot render books.");
        return;
    }

    appDiv.innerHTML = '<h2>Game of Thrones Books</h2>';
    const ul = document.createElement('ul');
    books.forEach(book => {
        const li = document.createElement('li');
        li.textContent = book.name; // Display the book's name
        ul.append(li);
    });
    appDiv.append(ul);
}

// The lab states fetchBooks() is called when index.html is loaded.
// This typically means there's a script tag in index.html like:
// <script src="index.js"></script>
// and then a call, or the tests themselves trigger it.
// To ensure it runs when the page loads, you might add:
document.addEventListener('DOMContentLoaded', () => {
    fetchBooks();
});
