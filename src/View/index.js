import React, {useState} from "react";
import TextFields from "./TextFields/TextFields";

import {Grid} from '@mui/material';

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
            <Grid container>
                <Grid xs={3}>
                    <span>Email*</span><br/>
                    <TextFields type={''} label={''} variant={''} placeholder={''} width={''} autocomplete={''} value={data} validateData={validateData} />
                </Grid>
            </Grid>
        </>
    );
}

export default View;