import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    flexGrow: 1,
    maxWidth: "400px",
    height: "300px",
    marginTop: "160px",
  },
}));

const Form = () => {
  const classes = useStyles();

  return (
    <Paper elevation={2} className={classes.paper}>
      Form
    </Paper>
  );
};

export default Form;
