import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import TasksContext from "../store/task-context";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

export default function FormDialog(props) {
  const tasksCtx = useContext(TasksContext);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState(null);

  const isBtnDisable = !title || !desc || !date

  const closeHandler = () => {
    setTitle('')
    setDesc('')
    setDate(null)
    props.closeHandler();
  };

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };

  const descHandler = (event) => {
    setDesc(event.target.value);
  };

  const createHandler = () => {
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    let customDate = day + '/' + month + '/' + year
    
    let newTask = {
      id: Math.random(),
      title,
      desc,
      created: customDate,
      archived: "...",
      finished: "...",
      checked: false,
    };
    tasksCtx.createHandler(newTask);
    closeHandler();
  };



  return (
    <div>
      <Dialog open={props.addOpen} onClose={closeHandler}>
        <DialogContent>
          <TextField
            margin="dense"
            label="Title"
            type="text"
            fullWidth
            value={title}
            onChange={titleHandler}
            variant="standard"
          />
          <TextField
            margin="dense"
            id="name"
            label="Description"
            fullWidth
            onChange={descHandler}
            value={desc}
            variant="standard"
          />
        </DialogContent>
        <div className="datepicker-width">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              className="datepicker-width"
              label="Create Date"
              openTo="year"
              views={["year", "month", "day"]}
              value={date}
              onChange={(newDate) => {
                setDate(newDate);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
        <DialogActions>
          <Button onClick={closeHandler}>Cancel</Button>
          <Button disabled={isBtnDisable} onClick={createHandler} variant="contained" color="secondary">Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
