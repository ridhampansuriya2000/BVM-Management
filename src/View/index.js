import React, { useState } from "react";
import TextFields from "./TextFields/TextFields";
import Selection from "./Selection/Selection";
import { Grid, Container } from "@mui/material";

function View() {
  const [data, setdata] = useState("");

  const validateData = (getdata) => {
    setdata(getdata);

    return {
      isValidate: true,
      invalidMessage: "",
    };
  };

  return (
    <>
      <Container sx={{ mt: 5 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <span>Email*</span>
            <br />
            <TextFields
              type={""}
              label={""}
              variant={""}
              placeholder={""}
              width={""}
              autocomplete={""}
              value={data}
              validateData={validateData}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <span>Select </span>
            <br />
            <Selection
        sx={{ boxShadow: "0" }}
        allselectsx={{
          borderRadius: "500px",
          outline: "none",
          width: "100px",
        }}
        selectsx={{
          backgroundColor: "#F2F5FF",
          dropdowniconcolor: "black",
          color: "#808297",
          boxShadow: "none !important",
          borderRadius: "500px",
          border: "none",
        }}
        optionsx={{
          border: "red",
          dropdowniconcolor: "black",
          color: "#808297",
          boxShadow: "none !important",
          border: "none",
        }}
        options={[
          { value: "", Text: "None" },
          { value: "Age1", Text: "Age1" },
          { value: "Age2", Text: "Age2" },
        ]}
      />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <span>Email*</span>
            <br />
            
          </Grid>
        </Grid>
      </Container>

     
    </>
  );
}

export default View;
