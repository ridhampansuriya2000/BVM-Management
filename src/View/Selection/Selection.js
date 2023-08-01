import React, { useState } from "react";
import { FormControl,InputLabel,Select,MenuItem } from "@mui/material";
const Selection = (props) => {
    const [age,setAge] = useState("")
  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
      
        value={props.value}
        // value="12"
        label="Age"
        // onChange={handleChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Selection;
