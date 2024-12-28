const authors = [
    { id: 1, name: "Stephen Covey" },
    { id: 2, name: "William Zinsser" }, 
    { id: 3, name: "Ezra Klein" }
];

async function getAuthorById(authorId) {
    return authors.find(author => author.id === authorId)
}

module.exports = { getAuthorById };