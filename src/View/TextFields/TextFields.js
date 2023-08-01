import React from "react";

//MUI
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

function TextFields() {
    return(
        <>
            <section>
                <Container>
                    TextField
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{mx: 10}} />
                </Container>
            </section>
        </>
    );
}

export default TextFields;