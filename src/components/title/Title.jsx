import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  titleStyle: {
    padding: "20px 0",
    fontSize: "30px",
    borderBottom: "1px solid var(--light)",
    [theme.breakpoints.up("sm")]: {
      fontSize: "40px",
      padding: "30px 0",
    },
  },
}));

function Title(props) {
  const classes = useStyles();
  return (
    <>
      <Typography
        className={classes.titleStyle}
        variant="h3"
        color="primary"
        align="center"
      >
        {props.title}
      </Typography>
    </>
  );
}

export default Title;
