## TODOs MVC App

# Required Endpoints:

1. Create Todo

`POST /api/todos`

Creates a new todo
`title` is required

2. Get All Todos

`GET /api/todos`

Returns all todos

3. Get Todo by ID

`GET /api/todos/:id`

Returns a single todo
Return 404 if not found

4. Update Todo (Partial Update)

`PUT /api/todos/:id`

Update `title` and/or `isCompleted`
Keep existing values if fields are missing
Return 404 if not found

5. Delete Todo

`DELETE /api/todos/:id`

Deletes a todo (return proper status code)
Return 404 if not found

Bonus: Implement search 