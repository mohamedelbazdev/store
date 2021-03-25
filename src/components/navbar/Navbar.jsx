import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartOutlined from "@material-ui/icons/ShoppingCartOutlined";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  typographyStyle: { marginRight: theme.spacing(5) },
  buttonStyle: { color: "var(--white)", fontSize: "18px" },
  cartStyle: {
    color: "var(--white)",
    border: "1px solid var(--white)",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography className={classes.typographyStyle} variant="h4">
            STORE-Y
          </Typography>
          <Button className={classes.buttonStyle}>Products</Button>
          <div className={classes.grow} />
          <Button
            className={classes.cartStyle}
            variant="outlined"
            size="small"
            startIcon={<ShoppingCartOutlined />}
          >
            <Typography>My Cart</Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
