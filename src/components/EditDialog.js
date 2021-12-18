import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import TasksContext from "../store/task-context";

export default function FormDialog(props) {
  const tasksCtx = useContext(TasksContext);
  const [title, setTitle] = useState(props.task.title);

  const [desc, setDesc] = useState(props.task.desc);

  const closeHandler = () => {
    props.closeHandler();
  };

  const editTask = (task) => {
    task.title = title;
    task.desc = desc;
    tasksCtx.editHandler(task);
    closeHandler();
  };

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };

  const descHandler = (event) => {
    setDesc(event.target.value);
  };
  return (
    <div>
      <Dialog open={props.open} onClose={closeHandler}>
        <DialogContent>
          <TextField
            margin="dense"
            label="Title"
            type="text"
            fullWidth
            value={title}
            onChange={titleHandler}
            defaultValue={props.task.title}
            variant="standard"
          />
          <TextField
            margin="dense"
            label="Description"
            fullWidth
            onChange={descHandler}
            value={desc}
            defaultValue={props.task.desc}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeHandler}>Cancel</Button>
          <Button onClick={() => editTask(props.task)}>Edit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
