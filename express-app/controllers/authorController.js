import { getAuthorById } from "../fake-db.js";
import CustomNotFoundError from "../errors/CustomNotFoundError.js";

// handle action
export const getAuthorByIdController = async (req, res) => {
  // business logic + operations

  const { authorId } = req.params;

  // 1. talk to authors Model/DB layer
  const authorIndex = await getAuthorById(authorId);
  console.log({ authorIndex });
  // const isTargetAuthorExist = authorIndex !== -1;

  if (!authorIndex) {
    //3. talk to view
    // throw error => Error
    throw new CustomNotFoundError("Author not found");
  }

  // operations
  const updatedAuthor = { id: 1, name: "updated Author" };

  // 5. talk to view
  // responded with updated authors
  res.json(updatedAuthor);
};
