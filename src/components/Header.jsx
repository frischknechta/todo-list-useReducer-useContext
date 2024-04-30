import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { useThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { state } = useContext(TaskContext);
  const { setTheme } = useThemeContext();

  return (
    <header className="flex flex-col items-center gap-5">
      <h1 className="mt-5 text-4xl font-bold">My Todo List</h1>
      <div className="flex w-full justify-around gap-5">
        <div>
          Number of tasks total :{" "}
          {state.numberOfDoneTasks + state.numberOfUndoneTasks}
        </div>
        <div>Number of tasks open : {state.numberOfUndoneTasks}</div>
        <div>Number of tasks done : {state.numberOfDoneTasks} </div>
        <button
          className="rounded-full border border-solid border-black bg-gray-300 px-5 text-black hover:bg-gray-500 hover:text-white"
          onClick={() => {
            setTheme((prev) => {
              return prev === "white" ? "black" : "white";
            });
          }}
        >
          Light / Dark
        </button>
      </div>
    </header>
  );
};

export default Header;
