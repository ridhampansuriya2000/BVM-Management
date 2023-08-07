import React, {useEffect, useState} from "react";

//MUI
import { TextField } from '@mui/material';
import styled from 'styled-components';

//icons
import { BsEye, BsEyeSlash } from "react-icons/bs";

//css
import style from "./TextFields.module.css";

//edited TextField
const CustomTextField = styled(TextField)(({theme}) => ({
    outline: 'none',

    '& label':{
        transform: 'translate(14px, 8px) scale(1)',
    },
    '& label.Mui-focused':{
        color: '#1976d2',
        transform: 'translate(15px, -8px) scale(0.75)',
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
            borderColor: '#4b4b4b',
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
            borderColor: '#4b4b4b',
        },
    },
    '& .MuiFormHelperText-root':{
        position: 'absolute',
        top: '100%',
        color: 'red',
        marginLeft: '5px',
    },
}));


function TextFields({type,label,variant,placeholder,width,autocomplete,value,name,required,helperText,onChange}){

    const [showPassword, setShowPassword] = useState(false); //to set button and type

    //toggle's the eye button
    const handleTogglePassword = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    };

    return(
        <div className={`${style.textbox}`} style={{width: width ? width : '100%'}}>
            <CustomTextField id="outlined-basic"
                             type={type === 'password' ? (showPassword ? "text" : "password") : type}
                             label={label}
                             variant={variant ? variant : 'outlined'}
                             placeholder={placeholder}
                             fullWidth={true}
                             value={value}
                             name={name}
                             helperText={helperText}
                             autoComplete={autocomplete}
                             required={required}

                onChange={(e) => {
                    onChange(e);
                }}
            />
            {
                type === 'password' &&
                (showPassword ? (
                    <BsEye className={`${style.eyebtn}`} onClick={handleTogglePassword} />
                ) : (
                    <BsEyeSlash className={`${style.eyebtn}`} onClick={handleTogglePassword} />
                ))
            }
        </div>
    );
}

export default TextFields;
