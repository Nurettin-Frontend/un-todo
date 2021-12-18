import React, { useState, useContext } from "react";
import { Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import Task from "../components/Task";
import style from "./Tasks.module.scss";
import tasksContext from "../store/task-context";
import AddDialog from "../components/AddDialog";

const Tasks = () => {
  let { tasks } = useContext(tasksContext);
  const [addOpen, setAddOpen] = useState(false);

  const closeHandler = () => {
    setAddOpen(false);
  };

  const openDialog = () => {
    setAddOpen(true);
  };
  return (
    <div className={style.container}>
      <div className={style.container__layout}>
        <div className={style.container__layout__task}>
          <span className="text">Status</span>
          <span className={style.container__layout__task__details + " text"}>
            Title & Desc
          </span>
          <span className="text">Created</span>
          <span className="text">Finished</span>
          <span className="text">Archived</span>
          <span className="text">Settings</span>
        </div>
        {tasks.map((task) => {
          return <Task key={task.id} data={task} />;
        })}
        <br />
        <Button
          color="secondary"
          variant="contained"
          onClick={openDialog}
          startIcon={<Add />}
        >
          Add New Task
        </Button>
        <AddDialog addOpen={addOpen} closeHandler={closeHandler} />
      </div>
    </div>
  );
};

export default Tasks;
