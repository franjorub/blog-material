import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar } from "@material-ui/core";
import ElevationScroll from "./ElevationScroll";
import NavBarLink from "./NavBarLink";

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: "#FFF"
  }
}));
const NavBar = () => {
  const classes = useStyles();

  return (
    <ElevationScroll>
      <AppBar position="sticky" className={classes.appBar}>
        <Toolbar>
          <NavBarLink to="/" label="Home" exact />
          <NavBarLink to="/about" label="About" withBorders />
          <NavBarLink to="/contact" label="Contact" />
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default NavBar;
