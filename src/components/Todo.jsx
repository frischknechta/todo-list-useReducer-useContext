import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const Todo = ({ task, index }) => {
  const { dispatch } = useContext(TaskContext);

  return (
    <div className="flex justify-between">
      <input
        type="checkbox"
        name="done"
        id="done"
        checked={task.isDone ? true : false}
        onChange={() => {
          dispatch({ type: "TOGGLE_TASK", payload: index });
        }}
      />
      <div className="w-4/5">{task.task}</div>
      <button
        onClick={() => {
          dispatch({ type: "REMOVE_TASK", payload: index });
        }}
        className="rounded-full border border-solid border-black bg-gray-200 px-3 text-black hover:bg-gray-500 hover:text-white"
      >
        X
      </button>
    </div>
  );
};

export default Todo;
