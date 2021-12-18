import React, { useState } from "react";
import TasksContext from "./task-context";

const TasksProvider = (props) => {
  const [lightMode, setLightMode] = useState(false)
  let [tasks, setTasks] = useState([
    {
      id: 0,
      title: "Task 1",
      desc: "Description.............",
      created: "12/12/2021",
      finished: "13/12/2021",
      archived: "14/12/2021",
      checked: false,
    },
    {
      id: 1,
      title: "Task 2",
      desc: "Description 2.............",
      created: "12/12/2021",
      finished: "13/12/2021",
      archived: "14/12/2021",
      checked: true,
    },
    {
      id: 2,
      title: "Task 3",
      desc: "Description 3 .............",
      created: "12/12/2021",
      finished: "13/12/2021",
      archived: "14/12/2021",
      checked: false,
    },
    {
      id: 3,
      title: "Task 4",
      desc: "Description 4 .............",
      created: "12/12/2021",
      finished: "13/12/2021",
      archived: "14/12/2021",
      checked: true,
    },
  ]);


  const deleteHandler = (id) => {
    let filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks([...filteredTasks]);
  };
  const archiveHandler = (id) => {
    let task = tasks.find((tk) => tk.id == id);
    task.checked = !task.checked;
    //   to refresh arr
    setTasks([...tasks]);
  };

  const editHandler = (newVal) => {
    let task = tasks.find((tk) => tk.id === newVal.id);
    task.title = newVal.title;
    task.desc = newVal.desc;

    setTasks([...tasks]);
  };

  const createHandler = (newTask) => {
    tasks.push(newTask);
    let newTasks = tasks;
    setTasks([...newTasks]);
  };

  const toggleMode = () => {
    setLightMode(!lightMode)
  }

  let tasksContextValue = {
    tasks: tasks,
    lightMode,
    toggleMode,
    deleteHandler,
    archiveHandler,
    editHandler,
    createHandler,
  };
  return (
    <TasksContext.Provider value={tasksContextValue}>
      {props.children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
