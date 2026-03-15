import { v4 } from "uuid";

// a list of todos
const todos = [
  { task: "bl bla bl", id: v4() },
  { task: "bl bla bl", id: v4() },
  { task: "bl blaaa bl", id: v4() },
  { task: "bl bla bal", id: v4() },
  { task: "bl blaa bl", id: v4() },
  { task: "baaaaaaaaal bla bl", id: v4() },
];

// index as key
function TodoList() {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.task}</li>
      ))}
    </ul>
  );
}
export default TodoList;
