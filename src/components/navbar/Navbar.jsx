import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartOutlined from "@material-ui/icons/ShoppingCartOutlined";

const useStyles = makeStyles(() => ({
  typographyStyle: {
    flex: 1,
  },
  //   cartStyle: {
  //     color: "#fff",
  //   },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography className={classes.typographyStyle} variant="h6">
            STORE-Y Products
          </Typography>
          <Button variant="outlined" startIcon={<ShoppingCartOutlined />}>
            <Typography>My Cart</Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
