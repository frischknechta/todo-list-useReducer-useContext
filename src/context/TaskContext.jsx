import { createContext, useReducer } from "react";

export const TaskContext = createContext();

const initialState = {
  tasks: [],
  numberOfDoneTasks: 0,
  numberOfUndoneTasks: 0,
  lastState: null,
  sortTasks: false,
};

const taskReducer = (state, action) => {
  const { type, payload } = action;
  const stateCopy = structuredClone(state);
  switch (type) {
    case "ADD_TASK":
      stateCopy.numberOfUndoneTasks = stateCopy.numberOfUndoneTasks + 1;
      stateCopy.tasks = [...stateCopy.tasks, { task: payload, isDone: false }];
      return stateCopy;

    case "REMOVE_TASK":
      const deletedTask = stateCopy.tasks.splice(payload, 1);
      if (deletedTask[0].isDone === true) {
        stateCopy.numberOfDoneTasks--;
      } else {
        state.numberOfUndoneTasks--;
      }

      return stateCopy;

    case "TOGGLE_TASK":
      stateCopy.tasks[payload].isDone =
        stateCopy.tasks[payload].isDone === false ? true : false;

      if (stateCopy.tasks[payload].isDone) {
        stateCopy.numberOfDoneTasks++;
        stateCopy.numberOfUndoneTasks--;
      } else {
        stateCopy.numberOfDoneTasks--;
        stateCopy.numberOfUndoneTasks++;
      }

      return stateCopy;

    case "RESET":
      return initialState;

    case "TOGGLE_SORT_TASKS":
      stateCopy.sortTasks = !stateCopy.sortTasks;
      return stateCopy;

    default:
      return state;
  }
};

const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider
      value={{
        tasks: state.tasks,
        numberOfDoneTasks: state.numberOfDoneTasks,
        numberOfUndoneTasks: state.numberOfUndoneTasks,
        sortTasks: state.sortTasks,
        dispatch: dispatch,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
