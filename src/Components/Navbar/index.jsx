import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; 


const Navbar = ({ children }) => {
  const history = useNavigate();
  const logOut = async () => {
    // localStorage.removeItem("token");
    history("/login");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#5d8ea2" }}>
        <Toolbar>
          <img
            src="https://miro.medium.com/max/1400/1*EyuGaXE7-AlkKLjvIvRcuA.png"
            style={{ width: "8%" }}
          />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
         
          <Stack spacing={2} direction="row">
          <Link  to="/home">
          <Button variant="contained"  color="success">
              Home
            </Button>
            </Link>
          <Link to="/about">
          <Button variant="contained"  color="success">
              About us
            </Button>
          </Link>
           <Link to="/contact">
           <Button variant="contained"  color="success">
              Contact us
            </Button>
            </Link>
              <Link to="/register">
              <Button variant="contained"  color="success">
              Signup
            </Button>
            </Link>
            <Button variant="contained" color="success" onClick={logOut}>
              Logout
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      {children}
    </Box>
  );
};
export default Navbar;
