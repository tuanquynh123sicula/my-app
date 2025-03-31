import { todoType } from "@/types/todoTypes";
import ChangTodo from "./ChangeTodo";
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";

const Todo = ({todo}:{todo:todoType}) => {
   const todoStyle = {
        textDecotation: todo.isCompleted == true ?
        "line-through" : "none",
        opacity: todo.isCompleted == true ?
        "0.5" : "1",
    }
  return (
    <div className="w-full flex items-center justify-between bg-white py-3 px-20 rounded-2xl"
    style={todoStyle}>
      <ChangTodo todo={todo} />
      <span className="text-center font-bold uppercase">
        {todo.title}
        </span>
        <span className="text-center font-bold uppercase">
        {todo.isCompleted.toString()}
        </span>
        <div className="flex items-center gap-5">
          <EditTodo todo={todo} />
          <DeleteTodo todo={todo} />
        </div>
    </div>
  );
;}

export default Todo;
