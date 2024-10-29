document.addEventListener('DOMContentLoaded', function() {
    const bookListDiv = document.getElementById('book-list');

    fetch('https://openlibrary.org/subjects/computers.json?limit=10') // Change to any subject or API endpoint
        .then(response => response.json())
        .then(data => {
            const books = data.works;
            books.forEach(book => {
                const bookDiv = document.createElement('div');
                bookDiv.className = 'book';
                bookDiv.innerHTML = `
                    <h3>${book.title}</h3>
                    <p>Author: ${book.authors ? book.authors.map(author => author.name).join(', ') : 'Unknown'}</p>
                    <p>Published: ${book.first_publish_year || 'N/A'}</p>
                `;
                bookListDiv.appendChild(bookDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching book data:', error);
            bookListDiv.innerHTML = '<p>Failed to load books.</p>';
        });
});
