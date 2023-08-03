import React from "react";
import Muibutton from "./Button/Button";
import Grid from "./grid/Grid";

function View() {
  const logMessage = () => {
    console.log("Hello from logMessage function!");
  };
  return (
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
      <Grid />
    </>
  );
}

export default View;
