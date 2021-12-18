import React, { useContext, useState } from "react";
import style from "./Task.module.scss";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import Archive from "@material-ui/icons/Archive";
import Edit from "@material-ui/icons/Edit";
import Check from "@material-ui/icons/Check";
import Info from "@material-ui/icons/Info";
import { Tooltip } from "@material-ui/core";
import TasksContext from "../store/task-context";
import EditDialog from "./EditDialog";
import InfoDialog from './InfoDialog'
const Task = (props) => {
  const tasksCtx = useContext(TasksContext);
  const [open, setOpen] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  let [task, setTask] = useState({});

  const deleteTask = (id) => {
    tasksCtx.deleteHandler(id);
  };

  const archiveHandler = (id) => {
    tasksCtx.archiveHandler(id);
  };

  const editHandler = (task) => {
    setOpen(true);
    setTask(task);
  };

 
  const infoHandler = (task) => {
    setOpenInfo(true);
    setTask(task);
  }; 

  const closeHandler = () => {
    setOpen(false);
    setOpenInfo(false);
  };

  return (
    <div className={style.task}>
      <div className={style.task__check}>
        {props.data.checked && <Check />}
        <span className="text">{props.data.checked ? "Checked" : "Check"}</span>
      </div>
      <div className={style.task__title}>
        <span className="text">{props.data.title}</span>
        <p>{props.data.desc.substring(0, 20)} {props.data.desc.length > 20 ? '...': ''} </p>
      </div>
      <div>
        <span className="text">{props.data.created}</span>
      </div>
      <div>
        <span className="text">{props.data.finished}</span>
      </div>
      <div>
        <span className="text">{props.data.archived}</span>
      </div>
      <div className={style.task__icons}>
        <Tooltip title="Info">
          <Info onClick={() => infoHandler(props.data)} />
        </Tooltip>
        <Tooltip title="Edit">
          <Edit onClick={() => editHandler(props.data)} />
        </Tooltip>

        <Tooltip title={props.data.checked ? 'Archived': 'Archive'}>
          <Archive onClick={() => archiveHandler(props.data.id)} />
        </Tooltip>

        <Tooltip title="Delete">
          <DeleteOutlineIcon onClick={() => deleteTask(props.data.id)} />
        </Tooltip>
      </div>
      <EditDialog open={open} task={task} closeHandler={closeHandler} />
      <InfoDialog open={openInfo} task={task} closeHandler={closeHandler} />
    </div>
  );
};

export default Task;
