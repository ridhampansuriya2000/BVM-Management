import React, { useState } from "react";
import { Grid, Container, Box, Typography } from "@mui/material";
import Muibutton from "../../View/Button/Button";
import TextField from "../../View/TextFields/TextFields";
import Keysvg from "../../Assets/Icon/Keysvg";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

function NewPassword() {

    const [formValue, setFormValue] = useState({
        values: {
            password: "",
            confirmPassword: ""
        },
        touched: {},
        errors: "",
    });

    const navigate = useNavigate();

    const stateHendler = (event) => {
        const { name, value } = event.target;
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
                [name]: "",
            },
        }));
    };


    const errorHandler = ({ name, error }) => {
        setFormValue((prevState) => ({
            ...prevState,
            errors: {
                ...prevState.errors,
                [name]: error
            },
        }));

    };


    const validateForm = () => {
        const validPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        const { password, confirmPassword } = formValue.values;

        if (!password.match(validPasswordRegex)) {
            errorHandler({ name: 'password', error: 'invalid password!' })
            return false;
        }
        else {
            errorHandler({ name: 'password', error: "" });
        }
        if (confirmPassword !== password) {
            errorHandler({ name: 'confirmPassword', error: 'Password is not match!' })
            return false;
        }
        else {
            errorHandler({ name: 'confirmPassword', error: "" });
        }
        return true;
    };


    const areAllFieldsFilled = () => {
        const { password, confirmPassword } = formValue.values;
        return password.trim() !== "" && confirmPassword.trim() !== "";
    };

    const hendleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            navigate('/view');
        }
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
                                <TextField type={'password'} name={'password'} value={formValue.values.password} onChange={stateHendler} helperText={formValue.errors.password} />
                            </Box>
                            <Box sx={{ mt: "20px", }}>
                                <Typography>Confirm password*</Typography>
                                <TextField type={'password'} name={'confirmPassword'} value={formValue.values.confirmPassword} onChange={stateHendler} helperText={formValue.errors.confirmPassword} />
                            </Box>
                            <Box sx={{ mt: "20px", }}>
                                <Muibutton yz={{ height: "47px" }} text={"Reset password"} onClick={hendleSubmit} disabled={!areAllFieldsFilled()} />
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