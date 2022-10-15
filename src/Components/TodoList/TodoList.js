import TodoTask from "../TodoTask/TodoTask";
import { doRequest, URL } from "../../ServiceUtils";
import "./styles.css";

export default function TodoList({ todos, setTodos }) {
  const deleteTodo = async (id) => {
    await doRequest("delete", `${URL}/${id}`);
    const index = todos.findIndex((todo) => todo.id === id);
    todos.splice(index, 1);
    setTodos([...todos]);
  };

  const editTodo = async (id, newTitle) => {
    await doRequest("put", `${URL}/${id}`, { todo: newTitle });
    todos.filter((todo) => todo.id === id)[0].todo = newTitle;
    setTodos([...todos]);
  };

  const checkTask = (id) => {
    const index = todos.findIndex((task) => task.id === id);
    todos[index].checked = !todos[index].checked;
    setTodos([...todos]);
  };

  return (
    <div>
      <ul id="task-list">
        {todos.map((todo) => (
          <TodoTask
            key={todo.id}
            id={todo.id}
            title={todo.todo}
            checked={todo.checked}
            deleteTodoHandler={(id) => {
              deleteTodo(id);
            }}
            editTodoHandler={(todo, id) => {
              editTodo(todo, id);
            }}
            checkTaskHandler={(id) => {
              checkTask(id);
            }}
          />
        ))}
      </ul>
    </div>
  );
}
