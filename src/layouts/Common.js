import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import NavBar from "../components/NavBar";

const useStyles = makeStyles(theme => ({
  box: {
    height: "200px",
    width: "100%"
  }
}));

const CommonLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      <Box bgcolor="info.light" className={classes.box} />
      <NavBar />
      {children}
      <div>Footer</div>
    </div>
  );
};

export default CommonLayout;
