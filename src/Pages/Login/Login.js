import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

//mui
import { Grid } from "@mui/material";

//view
import TextFields from "../../View/TextFields/TextFields";
import Button from "../../View/Button/Button";

//css
import style from "./Login.module.css";

function Login() {

    const navigate = useNavigate();

    const [formValue, setFormValue] = useState({
        values: {
            email: '',
            password: '',
        },
        touched: {},
        error: "",
    });

    const stateHandler = (event) => {

        let { name, value } = event.target;
        console.log(`${name}`,value);

        setFormValue({
            ...formValue,
            values: {
                ...formValue.values,
                [name]: value,
            },
            touched:{
                ...formValue.touched,
                [name]: true,
            },
            error: "",
        });

    };

    const handleSubmit = () => {
        if(formValue.touched.email){
            setFormValue({...formValue,error: "Error is touched"});
        }
    };

    return(
        <>
            <section className={`${style.loginsection}`}>
                <Grid container sx={{minHeight: '100vh'}}>
                    <Grid item md={6} xl={8} className={`${style.banner}`}>
                        {/* background image banner */}
                    </Grid>
                    <Grid item xs={12} md={6} xl={4}>
                        <div className={`${style.loginwrapper}`}>
                            <Grid container xs={6} sm={4}>
                                <Grid item>
                                    <img className={`${style.logo}`} src={require('./../../Assets/Images/bvm logo 1.png')} />
                                </Grid>
                            </Grid>
                            <Grid container sx={{mt: 5}}>
                                <Grid item xs={12}>
                                    <h1 className={`${style.heading}`}>Welcome Back</h1>
                                    <p className={`${style.headingdescription}`}>Please enter your details.</p>
                                </Grid>
                            </Grid>
                            <Grid container sx={{mt: 6}}>
                                <Grid item xs={12}>
                                    <span
                                        className={`${style.fieldtitle}`}
                                    >
                                        Email
                                    </span>
                                    <TextFields
                                        type={'text'}
                                        placeholder={'Enter your email'}
                                        name={'email'}
                                        autocomplete={'off'}
                                        value={formValue.values.email}
                                        helperText={formValue.error}
                                        onChange={stateHandler}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container sx={{mt: 4}}>
                                <Grid item xs={12}>
                                    <span className={`${style.fieldtitle}`}>Password</span>
                                    <TextFields
                                        type={'password'}
                                        placeholder={'Password'}
                                        name={'password'}
                                        autocomplete={'off'}
                                        value={formValue.values.password}
                                        onChange={stateHandler}
                                    />
                                </Grid>
                            </Grid>
                            <Grid container sx={{mt: 5, justifyContent: 'space-between', alignItems: 'center'}}>
                                <Grid item sx={{display: 'flex', alignItems: 'center'}}>
                                    <input
                                        type={'checkbox'}
                                        id={'remember'}
                                        value={'remember'}
                                        className={`${style.remcheckbox}`}
                                    />
                                    <label htmlFor={'remember'} className={`${style.remlabel}`} >Remember</label>
                                </Grid>
                                <Grid item>
                                    <span className={`${style.forgotpass}`}
                                          onClick={() => navigate('/forgotpassword')}
                                    >
                                        Forgot password?
                                    </span>
                                </Grid>
                            </Grid>
                            <Grid container sx={{mt: 4}}>
                                <Grid item xs={12}>
                                    <Button
                                        yz={{width: '100%', fontWeight: '500'}}
                                        onClick={handleSubmit}
                                    />
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </section>
        </>
    );
}

export default Login;