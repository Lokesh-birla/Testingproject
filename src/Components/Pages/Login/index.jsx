import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const history = useNavigate();
  const onSubmit = async (values) => {
    if (values !== null) {
      history("/home");
    } else {
      console.log("First Fill all Fields");
    }
  };

  return (
    <div style={{ width: "40%", margin: "0 auto" }}>
      <form
        style={{ marginTop: "8rem", display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography variant="h3" textAlign={"center"}>
          USER LOGIN
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              type="email"
              label="Email"
              {...register("email")}
              fullWidth
              required
            >
              email
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="password"
              label="Password"
              {...register("password")}
              fullWidth
              required
            >
              password
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ position: "relative" }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
   
  );
};
export default Login;
