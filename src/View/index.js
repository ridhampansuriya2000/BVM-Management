import React, {useState} from "react";
import TextFields from "./TextFields/TextFields";

function View() {

    const [data, setdata] = useState('');

    const validateData = (getdata) => {
        setdata(getdata);

        if(getdata === 'Ronak'){
            return {
                isValidate: true,
                invalidMessage: '',
            }
        }else{
            return {
                isValidate: false,
                invalidMessage: 'Wrong Name',
            }
        }
    };

    return(
        <>
            <TextFields type={''} label={''} variant={''} placeholder={''} width={''} autocomplete={''} value={data} validateData={validateData} />
        </>
    )
}

export default View;