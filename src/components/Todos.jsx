import Todo from "./Todo";

// CONTEXT

import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const Todos = () => {
  const { tasks, sortTasks } = useContext(TaskContext);

  return (
    <div>
      <h1>Todos</h1>
      {sortTasks ? (
        <div>
          <div>
            <h2>Tasks to do</h2>
            {tasks.map((elem, index) => {
              if (!elem.isDone) {
                return <Todo key={index} task={elem} index={index}></Todo>;
              } else return null;
            })}
          </div>
          <div>
            <h2>Tasks done</h2>
            {tasks.map((elem, index) => {
              if (elem.isDone) {
                return <Todo key={index} task={elem} index={index}></Todo>;
              } else return null;
            })}
          </div>
        </div>
      ) : (
        tasks.map((elem, index) => {
          return <Todo key={index} task={elem} index={index}></Todo>;
        })
      )}
    </div>
  );
};

export default Todos;
