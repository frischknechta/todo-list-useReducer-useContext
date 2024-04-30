import { useContext, useRef } from "react";
import { TaskContext } from "../context/TaskContext";

const ToolBar = () => {
  const inputRef = useRef();

  const { dispatch } = useContext(TaskContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_TASK", payload: inputRef.current.value });
    inputRef.current.value = "";
  };

  return (
    <div className="flex gap-5">
      <form onSubmit={handleSubmit}>
        <input
          className="border-black border-solid border"
          type="text"
          name="task"
          id="task"
          placeholder="New task"
          ref={inputRef}
          required
        />
        <button className="border-black border-solid border">
          Register task
        </button>
      </form>
      <button
        className="border-black border-solid border"
        onClick={() => {
          dispatch({ type: "RESET" });
        }}
      >
        Reset
      </button>
      <button
        className="border-black border-solid border"
        onClick={() => {
          dispatch({ type: "TOGGLE_SORT_TASKS" });
        }}
      >
        Sort tasks
      </button>
    </div>
  );
};

export default ToolBar;
