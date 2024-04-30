import Todo from "./Todo";

// CONTEXT

import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const Todos = () => {
  const { state } = useContext(TaskContext);

  return (
    <div className="my-10 flex flex-col items-center gap-5">
      <h2 className="text-2xl font-bold">Todos</h2>
      <div className="flex w-1/2 flex-col">
        {state.sortTasks ? (
          <div className="flex flex-col gap-5">
            <h3 className="font-bold">Tasks to do</h3>
            <div className="flex flex-col gap-1">
              {state.tasks.map((elem, index) => {
                if (!elem.isDone) {
                  return <Todo key={index} task={elem} index={index}></Todo>;
                } else return null;
              })}
            </div>
            <h3 className="font-bold">Tasks done</h3>
            <div className="flex flex-col gap-1">
              {state.tasks.map((elem, index) => {
                if (elem.isDone) {
                  return <Todo key={index} task={elem} index={index}></Todo>;
                } else return null;
              })}
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-1">
            {state.tasks.map((elem, index) => {
              return <Todo key={index} task={elem} index={index}></Todo>;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Todos;
