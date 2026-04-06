

Exercises 4.1.-4.2.


In the exercises for this part, we will be building a blog list application, that allows users to save information about interesting blogs they have stumbled across on the internet. For each listed blog we will save the author, title, URL, and amount of upvotes from users of the application.
4.1 Blog List, step 1

Let's imagine a situation, where you receive an email that contains the following application body and instructions:

const express = require('express')
const mongoose = require('mongoose')

const app = express()

const blogSchema = mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
})

const Blog = mongoose.model('Blog', blogSchema)

const mongoUrl = 'mongodb://localhost/bloglist'
mongoose.connect(mongoUrl, { family: 4 })

app.use(express.json())

app.get('/api/blogs', (request, response) => {
  Blog.find({}).then((blogs) => {
    response.json(blogs)
  })
})

app.post('/api/blogs', (request, response) => {
  const blog = new Blog(request.body)

  blog.save().then((result) => {
    response.status(201).json(result)
  })
})

const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

Turn the application into a functioning npm project. To keep your development productive, configure the application to be executed with node --watch. You can create a new database for your application with MongoDB Atlas, or use the same database from the previous part's exercises.

Verify that it is possible to add blogs to the list with Postman and that the application returns the added blogs at the correct endpoint.

4.2 Blog List, step 2

Refactor the application into separate modules as shown earlier in this part of the course material.

One best practice is to commit your code every time it is in a stable state. This makes it easy to rollback to a situation where the application still works.

If you're having issues with content.body being undefined for seemingly no reason, make sure you didn't forget to add app.use(express.json()) near the top of the file.




Exercises 4.15.-4.17.

In the next exercises, the basics of user management will be implemented for the Bloglist application.

One more warning: If you notice you are mixing async/await and then calls, it is 99% certain you are doing something wrong. Use either or, never both.


4.15: Blog List Expansion, step 3

Implement a way to create new users by doing an HTTP POST request to address api/users. Users have a username, password and name.

Do not save passwords to the database as clear text, use the bcrypt library like we did


Implement a way to see the details of all users by doing a suitable HTTP request.

The list of users can, for example, look as follows:

See pic blog-1.png


browser api/users shows JSON data of two users


4.16*: Blog List Expansion, step 4

Add a feature which adds the following restrictions to creating new users: Both username and password must be given and both must be at least 3 characters long. The username must be unique.

The operation must respond with a suitable status code and some kind of an error message if an invalid user is created.

NB Do not test password restrictions with Mongoose validations. It is not a good idea because the password received by the backend and the password hash saved to the database are not the same thing. The password length should be validated in the controller as we did last session



4.17: Blog List Expansion, step 5

Expand blogs so that each blog contains information on the creator of the blog.

Modify adding new blogs so that when a new blog is created, any user from the database is designated as its creator (for example the one found first). Which user is the creator does not matter just yet. The functionality is finished later

Modify listing all blogs so that the creator's user information is displayed with the blog:
api/blogs embeds creators user information in JSON data

and listing all users also displays the blogs created by each user:

pic blog-2.png

api/users embeds blogs in JSON data






4.18: Blog feature expansion, step 1

Implement functionality for liking a blog.

Create an endpoint that allows the number of likes of a blog to be increased by one. The endpoint should identify the blog by its id and return the updated blog as JSON.

A suitable endpoint could be:

PATCH /api/blogs/:id/like

The operation should:

return status code 200 with the updated blog if successful
return status code 404 if the blog does not exist
return status code 400 if the provided id is malformed
4.19: Blog feature expansion, step 2

Implement searching blogs by title.

Expand the endpoint for listing blogs so that it supports a query parameter called search.

For example:

GET /api/blogs?search=react

The operation should:

return only blogs whose title matches the given search term
perform the search case-insensitively
support partial matches, so searching for node should also match titles such as "Learning Node.js"

You may first implement the search using a regular expression.

4.20: Blog feature expansion, step 3

Improve the search functionality by adding an index for the title field.

Modify the blog schema so that searching by title is better supported. After adding the index, verify that the application still works as expected.


4.21: Blog feature expansion, step 4

Implement filtering blogs by author.

Expand the GET /api/blogs endpoint so that it also supports an author query parameter.

For example:

GET /api/blogs?author=Robert Martin

The operation should:

return only blogs written by the given author
work together with the search parameter

For example, the following should also work:

GET /api/blogs?search=clean&author=Robert Martin

4.22: Blog feature expansion, step 5

Implement sorting for blog lists.

Expand the GET /api/blogs endpoint so that the results can be sorted using query parameters.

For example:

GET /api/blogs?sortBy=likes&order=desc

Support sorting by:

likes

Support both:

asc
desc

If the client provides an unsupported sort field, the operation should respond with a suitable error message and status code.

4.23: Blog feature expansion, step 6

Implement pagination for blog lists.

Expand the GET /api/blogs endpoint so that it supports the query parameters:

page
limit

For example:

GET /api/blogs?page=2&limit=5

The operation should:

return only the requested slice of blogs
support pagination together with searching, filtering, and sorting
return a JSON response that also includes pagination metadata, such as:
current page
page size
total number of matching blogs
total number of pages