const authors = [
  { id: "1", name: "Fadwa" },
  { id: "2", name: "Ahmed" },
  { id: "3", name: "Menna" },
];

// query
export async function getAuthorById(authorId) {
  return authors.find((author) => author.id === authorId);
}

// export??? => db is private
// query on the db
