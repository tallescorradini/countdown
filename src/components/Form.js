import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  paper: {
    flexGrow: 1,
    maxWidth: "600px",
  },
}));

const Form = () => {
  const classes = useStyles();

  return (
    <Paper elevation={2} className={classes.paper}>
      <Grid container style={{ flexGrow: 1, margin: "8px" }} spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">Let's set it up</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="title"
            variant="outlined"
            label="Event title"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="end-date" variant="outlined" label="Ends" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="end-time" variant="outlined" label="At" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Button
            id="pick-background"
            variant="outlined"
            fullWidth
            style={{ height: "56px" }}
          >
            Pick a background
          </Button>
        </Grid>
        <Grid item xs={12} />
        <Grid item xs={12}>
          <Button
            id="start-counter"
            variant="contained"
            fullWidth
            style={{ height: "56px" }}
          >
            Start now!
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Form;
