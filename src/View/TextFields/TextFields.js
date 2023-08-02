import React from "react";

//MUI
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import styled from 'styled-components';

//css
import style from "./TextFields.module.css";

//edited textfield
const CustomTextField = styled(TextField)(({theme}) => ({
    outline: 'none',

    '& label':{
        transform: 'translate(50%, 35%) scale(1)',
    },
    '& label.Mui-focused':{
        color: '#1976d2',
        transform: 'translate(36%, -30%) scale(0.75)',
    },
    '& .MuiInputBase-root':{
        '& .MuiInputBase-input':{
            padding: '8px 18px',
            outline: 'none',
        },
        '&::before':{
            borderWidth: '2px',
            borderColor: '#8a8a8a',
        },
        '&::after':{
            borderColor: 'black',
        },
        '& fieldset':{
            borderColor: '#8a8a8a',
            borderWidth: '2px',
            borderRadius: '8px',
            outline: 'none',
            transition: '.3s',
        },
        '&:hover fieldset':{
            borderColor: '#8a8a8a',
        },
        '&.Mui-focused fieldset':{
            borderColor: 'black',
        },
    },
    '& .MuiFormHelperText-root':{
        color: 'red',
    },
}));

function TextFields({type,label,variant,placeholder,width,autocomplete,value,validateData}){

    const [error, setError] = React.useState('');

    const handleValidate = (e) => {
        const {isValidate, invalidMessage} = validateData(e.target.value);

        if(!isValidate && e.target.value !== ''){
            if(invalidMessage){
                setError(invalidMessage);
            }
            else{
                setError('Error');
            }
        }
        else{
            setError('');
        }
    };

    return(
        <div style={{width: width ? width : '40%'}}>
            <span>Email*</span><br/>
            <CustomTextField id="outlined-basic"
                             type={type}
                             label={label}
                             variant={variant ? variant : 'outlined'}
                             placeholder={placeholder}
                             fullWidth={true}
                             value={value}
                             helperText={error}
                             autoComplete={autocomplete}

                onChange={(e) => {
                    validateData && handleValidate(e);
                }}
            />
        </div>
    );
}

export default TextFields;