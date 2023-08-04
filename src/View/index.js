import React, { useState } from "react";
import Muibutton from "./Button/Button";
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
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          spacing={3}
        >
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
            error
              labelName="age"
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
              }}
              optionsx={{
                border: "red",
                dropdowniconcolor: "black",
                color: "#808297",
                boxShadow: "none !important",
                height: "200px !important",
              }}
              options={[
                { value: "", Text: "None" },
                { value: "Age1", Text: "Age1" },
                { value: "Age2", Text: "Age2" },
              ]}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <span>Button*</span>
              <br />
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
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default View;
