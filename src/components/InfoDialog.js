import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { Grid } from "@material-ui/core";

export default function FormDialog(props) {
  const closeHandler = () => {
    props.closeHandler();
  };

  return (
    <div>
      <Dialog open={props.open} onClose={closeHandler}>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={6} md={12}>
              <span>
                <strong>Title: </strong> {props.task.title}
              </span>
            </Grid>
            <Grid item xs={6} md={12}>
              <span>
                <strong>Description: </strong> {props.task.desc}
              </span>
            </Grid>

            <Grid item xs={6} md={12}>
              <span>
                <strong>Created : </strong> {props.task.created}
              </span>
            </Grid>

            <Grid item xs={6} md={12}>
              <span>
                <strong>Finished: </strong> {props.task.finished}
              </span>
            </Grid>
            <Grid item xs={6} md={12}>
              <span>
                <strong>{props.task.checked ? 'Checked': 'not Checked'} </strong> 
              </span>
            </Grid>            
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeHandler}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
