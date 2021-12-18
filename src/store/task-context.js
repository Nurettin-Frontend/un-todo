import React from "react";

const TasksContext = React.createContext({
  tasks: [],
  lightMode: false,
  deleteTask: (id) => {},
  archiveTask: (id) => {},
  editHandler: (newVal) => {},
  createHandler: (newTask) => {},
  toggleMode: () => {}
});

export default TasksContext