const getTheTitles = function(books) {
    const result = books.map(book => {
        return book.title;
    });
    return result;
}

module.exports = getTheTitles;
