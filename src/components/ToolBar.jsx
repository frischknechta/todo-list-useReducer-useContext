import { useContext, useRef } from "react";
import { TaskContext } from "../context/TaskContext";

const ToolBar = () => {
  const inputRef = useRef();

  const { dispatch, state } = useContext(TaskContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_TASK", payload: inputRef.current.value });
    inputRef.current.value = "";
  };

  return (
    <div className="mx-auto flex w-1/2 flex-col gap-5">
      <form onSubmit={handleSubmit} className="flex justify-between ">
        <input
          className="w-4/6 border border-solid border-black px-5  text-black"
          type="text"
          name="task"
          id="task"
          placeholder="New task"
          ref={inputRef}
          required
        />
        <button className="rounded-full border border-solid border-black bg-gray-300 px-5 text-black hover:bg-gray-500 hover:text-white">
          Register task
        </button>
      </form>
      <div className="flex justify-between gap-5">
        <button
          className="rounded-full border border-solid border-black bg-gray-300 px-5 text-black hover:bg-gray-500 hover:text-white"
          onClick={() => {
            dispatch({ type: "RESET" });
          }}
        >
          Reset
        </button>
        {state.lastState ? (
          <button
            className="rounded-full border border-solid border-black bg-gray-300 px-5 text-black hover:bg-gray-500 hover:text-white"
            onClick={() => {
              dispatch({ type: "UNDO_LAST_EVENT" });
            }}
          >
            Undo last event
          </button>
        ) : null}{" "}
        <button
          className="rounded-full border border-solid border-black bg-gray-300 px-5 text-black hover:bg-gray-500 hover:text-white"
          onClick={() => {
            dispatch({ type: "TOGGLE_SORT_TASKS" });
          }}
        >
          {state.sortTasks ? "Unsort" : "Sort"} my tasks
        </button>
      </div>
    </div>
  );
};

export default ToolBar;
