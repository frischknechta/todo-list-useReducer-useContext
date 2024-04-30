import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const Todo = ({ task, index }) => {
  const { dispatch } = useContext(TaskContext);

  return (
    <div className="flex gap-5">
      <input
        type="checkbox"
        name="done"
        id="done"
        checked={task.isDone ? true : false}
        onChange={() => {
          dispatch({ type: "TOGGLE_TASK", payload: index });
        }}
      />
      <div>{task.task}</div>
      <button
        onClick={() => {
          dispatch({ type: "REMOVE_TASK", payload: index });
        }}
      >
        Delete task
      </button>
    </div>
  );
};

export default Todo;
