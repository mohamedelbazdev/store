import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Container,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ShoppingCartOutlined from "@material-ui/icons/ShoppingCartOutlined";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  productBtnStyle: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      marginRight: theme.spacing(5),
    },
    color: "var(--white)",
    fontSize: "18px",
    fontFamily: "Roboto",
    textDecoration: "none",
    padding: "20px",
    "&:hover": {
      color: "#757ce8",
      textShadow: "0 2px 20px  var(--white)",
      background: "var(--white)",
    },
  },
  cartStyle: {
    color: "var(--white)",
    border: "1px solid var(--white)",
    "&:hover": {
      color: "#757ce8",

      background: "var(--white)",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />

      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography variant="h4">STORE-Y</Typography>
            <div className={classes.grow} />
            <Link to="/" className={classes.productBtnStyle} underline="none">
              Products
            </Link>
            <Link to="/cart">
              <IconButton className={classes.cartStyle}>
                <ShoppingCartOutlined />
              </IconButton>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
