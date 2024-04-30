import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const Header = () => {
  const { numberOfDoneTasks, numberOfUndoneTasks } = useContext(TaskContext);

  return (
    <header className="flex gap-5">
      <h1 className="font-bold">My Todo List</h1>
      <div>
        Number of tasks total : {numberOfDoneTasks + numberOfUndoneTasks}
      </div>
      <div>Number of tasks open : {numberOfUndoneTasks}</div>
      <div>Number of tasks done : {numberOfDoneTasks} </div>
    </header>
  );
};

export default Header;
