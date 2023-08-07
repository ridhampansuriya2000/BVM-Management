import { Grid, Box, Typography, Container } from "@mui/material";
import TextFields from "../../View/TextFields/TextFields";
import Muibutton from "../../View/Button/Button";
import forgot_password from "../../Assets/Images/forgot_password.png";
import React, { useState } from "react";
import Forgotkeyicon from "../../Assets/Icon/Forgotkeyicon";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router";

function ForgotPassword() {

  
  const [FormState, setFormState] = useState({values:{email:""},touched:{},errors:{}});
 

  
  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    const {name,value} = event.target
    console.log(value)
    const validEmail = "^[a-z0-9]+@[a-z]+\\.[a-z]{2,3}$";
    setFormState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
          [name]: value,
      },
      touched: {
        ...prevState.touched,
        [name]: true,
      },
      errors: {
        ...prevState.errors,
        [name]: name === 'email' && !validEmail.match(value) ? 'Invalid email address' : '',
      },
    }));
  };

  console.log(FormState)
 

  const clickHandler = async (e) => {
    e.preventDefault()
    console.log("clicked");
    navigate("/checkemail");
  };

  return (
    <Container sx={{ height: "100vh" }}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{ height: "100%" }}
      >
        <Grid item xs={12} md={8} sx={{ display: { xs: "none", md: "flex" } }}>
          <img
            src={forgot_password}
            alt="Forgot Password ?"
            loading="lazy"
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ p: 2, minHeight: "500px" }}>
            <Box
              sx={{
                fontFamily: "Roboto",
                textAlign: "center",
                fontWeight: "800",
                marginBottom: "30px",
              }}
            >
              <Forgotkeyicon width="70px" height="100%" />
            </Box>
            <Box>
              <Typography
                variant="h5"
                sx={{
                  fontSize: { xs: "26px", md: "32px" },
                  fontFamily: "Roboto",
                  textAlign: "center",
                  fontWeight: "900",
                }}
              >
                Forgotten password?
              </Typography>
              <br />
              <Typography
                variant="body1"
                sx={{ textAlign: "center", color: "gray" }}
              >
                No worries, we'll send you reset instructions.
              </Typography>
            </Box>
            <br />
            <form onSubmit={clickHandler}>
              <Box sx={{ margin: "30px 0px" }}>
                <Typography variant="body1" sx={{ fontWeight: "600" }}>
                  Email <span>*</span>
                </Typography>
{console.log("error",FormState.errors?.email)}
                <TextFields
                  placeholder="Enter your email"
                  variant="outlined"
                  fullWidth
                  name="email"
                  value={FormState.values.email}
                  padding="50px"
                  // validateData={validateData}
                  helperText={FormState.errors?.email}
                  onChange={onChangeHandler}
                  required
                />
              </Box>
              <Box sx={{ margin: "30px 0px" }}>
                <Muibutton
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  text=" Reset Password"
                  yz={{ width: "100%" }}
                ></Muibutton>
              </Box>
            </form>
            <Box sx={{ margin: "30px 0px", textAlign:"center" }}>
            <Muibutton
              variant="contained"
              bgcolor="none"
              fullWidth
              text=" Back to Login"
              yz={{
                width: "max-content",
                hoverBgColor: "none",
                color: "blue",
                hoverColor: "black",
                shadow: "none",
                hoverShadow: "none",
              }}
              onClick={() => navigate("/")}
              startIcon={<ArrowBackIcon />}
            ></Muibutton>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ForgotPassword;
