import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardStyle: {
    border: "1px solid var(--gray)",
    margin: theme.spacing(2),
  },
}));

function Product() {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={3}>
        <Grid item className={classes.cardStyle} xs={12} sm={6} md={3}>
          mohamed
        </Grid>
        <Grid item className={classes.cardStyle} xs={12} sm={6} md={3}>
          mohamed
        </Grid>
        <Grid item className={classes.cardStyle} xs={12} sm={6} md={3}>
          mohamed
        </Grid>
      </Grid>
    </>
  );
}

export default Product;
