import React, { useState } from "react";
import { Grid, Container, Box, Typography } from "@mui/material";
import Muibutton from "../../View/Button/Button";
import TextField from "../../View/TextFields/TextFields";
import Keysvg from "../../Assets/Icon/Keysvg";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function NewPassword() {

    const [formValue, setFormValue] = useState({
        values: {
            password: "",
            confirmPassword: ""
        },
        touched: {},
        errors: {},
    });

    const validPass = (event) => {
        let { name, value } = event.target;
        console.log(name,value)
        const validPassword = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$";

        setFormValue((prevState) => ({
            ...prevState,
            values: {
                ...prevState.values,
                ...prevState.values[name], 
                [name]: value,
            },
            touched: {
                ...prevState.touched,
                [name]: true,
            },
            errors: {
                ...prevState.errors,
                [name]: value.match(validPassword)
                    ? ""
                    : "Invalid password",
            },
        }));
       
    };

    const confirmPass = (event) => {
        let { name, value } = event.target;

        setFormValue((prevState) => ({
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
                [name]: value === formValue.values.password
                    ? ""
                    : "Passwords do not match",
            },
        }));
    };

    const areAllFieldsFilled = () => {
        const { password, confirmPassword } = formValue.values;
        return password.trim() !== "" && confirmPassword.trim() !== "";
    };

    const hendlepass = () => {
        console.log(formValue.values);
        setFormValue({
            values: {
                password: "",
                confirmPassword: ""
            },
            touched: {},
            errors: {},
        });
    };

    return (
        <>
            <Container sx={{ height: "100vh", alignItems: "center", display: "flex" }}>

                <Grid container >
                    <Grid item xs={12} md={7} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: "center" }}>
                        <img src="https://i.postimg.cc/hP8vHWhZ/5500661.jpg" style={{ width: "100%", height: "auto" }} alt="" />
                    </Grid>
                    <Grid item xs={12} md={5} sx={{ height: { xs: '100vh', md: 'auto' }, display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Box>
                            <Box sx={{ textAlign: "center" }}>
                                <Keysvg height="70px" width="70px" />
                            </Box>

                            <Typography variant="h4" sx={{ fontWeight: 800, mt: "10px", mb: "5px", textAlign: "center" }}>
                                Set new password
                            </Typography>
                            <Typography variant="h6" sx={{ opacity: "60%", textAlign: "center" }}>
                                Your new password must be different to
                            </Typography>
                            <Typography variant="h6" sx={{ opacity: "60%", textAlign: "center" }}>
                                previously used passwords.
                            </Typography>
                            <Box sx={{ mt: "20px", }}>
                                <Typography>Password*</Typography>
                                <TextField type={'password'} name={'password'} value={formValue.values.password} onChange={validPass} />
                            </Box>
                            <Box sx={{ mt: "20px", }}>
                                <Typography>Confirm password*</Typography>
                                <TextField type={'password'} name={'confirmPassword'} value={formValue.values.confirmPassword} onChange={confirmPass} />
                            </Box>
                            <Box sx={{ mt: "20px", }}>
                                <Muibutton yz={{ height: "47px" }} text={"Reset password"} onClick={hendlepass} disabled={!areAllFieldsFilled()} />
                                {/* {!areAllFieldsFilled() && ""} */}
                                <Muibutton
                                    variant="contained"
                                    bgcolor="none"
                                    fullWidth
                                    text=" Back to Login"

                                    yz={{
                                        width: "100%",
                                        hoverBgColor: "none",
                                        color: "black",
                                        hoverColor: "blue",
                                        shadow: "none",
                                        hoverShadow: "none",
                                    }}
                                    sx={{ mt: "20px", }}
                                    startIcon={<ArrowBackIcon />}
                                ></Muibutton>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

            </Container>
        </>
    );
}

export default NewPassword;