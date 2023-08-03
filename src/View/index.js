import Muibutton from "./Button/Button";
import React, {useState} from "react";
import TextFields from "./TextFields/TextFields";

import {Grid, Container} from '@mui/material';

function View(){

    const [data, setdata] = useState('');

    const validateData = (getdata) => {
        setdata(getdata);

        return {
            isValidate: true,
            invalidMessage: '',
        }
    };

    return(
        <>
            <Muibutton
            variant={""}
            bgcolor={""}
            loading={""}
            size={""}
            startIcon={""}
            endIcon={""}
            text={""}
            onClick={null}
            yz={{
                width: "",
                height: "",
                fontSize: "",
                borderRadius: "",
                fontWeight: "",
                fontStyle: "",
                textTransform: "",
                color: "",
                shadow: "",
                hoverBgColor: "",
                hoverColor: "",
                hoverShadow: "",
                transition: "",
                lodingcolor: "",
                lodingwidth: "",
                lodingheight: "",
            }}
        />
          
            <Container sx={{mt: 5}}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <span>Email*</span><br/>
                        <TextFields type={''} label={''} variant={''} placeholder={''} width={''} autocomplete={''} value={data} validateData={validateData} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <span>Email*</span><br/>
                        <TextFields type={''} label={''} variant={''} placeholder={''} width={''} autocomplete={''} value={data} validateData={validateData} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <span>Email*</span><br/>
                        <TextFields type={''} label={''} variant={''} placeholder={''} width={''} autocomplete={''} value={data} validateData={validateData} />
                    </Grid>
                </Grid>
            </Container>
        </>
    );}

export default View;
