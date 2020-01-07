import React from "react";
import { Box, Link } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  selected: {
    color: theme.palette.text.primary
  },
  link: {
    color: "green"
  },
  bordered: {
    borderRightWidth: "1px",
    borderLeftWidth: "1px",
    borderColor: `white ${theme.palette.text.hint}`,
    borderStyle: "solid"
  }
}));

const NavBarLink = ({ to, label, withBorders, ...rest }) => {
  const classes = useStyles();

  const boxProps = withBorders
    ? {
        px: 3,
        className: classes.bordered,
        mx: 0
      }
    : {
        px: 1,
        mx: 2
      };

  return (
    <Box {...boxProps}>
      <Link
        component={NavLink}
        to={to}
        activeClassName={classes.selected}
        variant="h6"
        color="textSecondary"
        {...rest}
      >
        {label}
      </Link>
    </Box>
  );
};

export default NavBarLink;
