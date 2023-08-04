import {
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import Muibutton from "../../View/Button/Button";
import emailimg from "../../Assets/Images/emailimg.png";
import React, { useState } from "react";
import Emailicon from "../../Assets/Icon/Emailicon";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router";

function CheckEmail() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const validateData = (value) => {
    setEmail(value);
    const validRegex = "[a-z0-9]+@[a-z]+.[a-z]{2,3}";
    if (value.match(validRegex)) {
      return {
        isValidate: true,
        invalidMessage: "",
      };
    } else {
      return {
        isValidate: false,
        invalidMessage: "Invalid Email Address",
      };
    }
  };

  const clickHandler = (e) => {
    console.log("clicked");
    navigate("/")
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
            src={emailimg}
            alt="Send Email?"
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
              <Emailicon width="70px" height="100%" />
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
                Check Your email
              </Typography>
              <br />
              <Typography
                variant="body1"
                sx={{ textAlign: "center", color: "gray" }}
              >
                We’ve sent a password reset link to your
              </Typography>
              <br />
              <Typography
                variant="body1"
                sx={{ textAlign: "center", color: "black",fontWeight: "bold",marginBottom: "10px" }}
              >
                Registered email.
              </Typography>
              <br />
              <Typography
                variant="body1"
                sx={{ textAlign: "center", color: "gray" }}
              >
                Didn’t receive the email? <span style={{color:"blue",cursor:"pointer"}} onClick={()=>navigate("/forgotpassword")} >Click to resend</span>
              </Typography>
            </Box>
            <br />
            
            <Muibutton
              variant="contained"
              bgcolor="none"
              fullWidth
              text=" Back to Login"
              yz={{
                width: "100%",
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
        </Grid>
      </Grid>
    </Container>
  );
}

export default CheckEmail;
