import React from 'react'
import { styled } from "@mui/material/styles";
import LoadingButton from "@mui/lab/LoadingButton";

const Muibutton = ({
  yz,
  endIcon,
  startIcon,
  size,
  bgcolor,
  color,
  variant,
  loading,
  text,
  ...props
}) => {
  const CustomButton = styled(LoadingButton)(({ theme }) => ({
    background: bgcolor
      ? bgcolor
      : "linear-gradient(to right,#39415C, #040822)",
    maxWidth: yz?.width || "400px",
    width: "100%",
    height: yz?.height || "50px",
    fontSize: yz?.fontSize || "18px",
    borderRadius: yz?.borderRadius || "10px",
    fontWeight: yz?.fontWeight || "bold",
    fontStyle: yz?.fontStyle || "normal",
    textTransform: yz?.textTransform || "capitalize",
    color: yz?.color || "white",
    boxShadow: yz?.shadow || "0px 4px 6px rgba(0, 0, 0, 0.1)",
    minWidth: "0",
    "& .MuiCircularProgress-root": {
      color: yz?.lodingcolor || "white",
      width: yz?.lodingwidth || "25px !important",
      height: yz?.lodingheight ||"25px !important",
    },
    "&:hover": {
      background:
        yz?.hoverBgColor || "linear-gradient(to right, #39415C, #040822)",
      color: yz?.hoverColor || "white",
      boxShadow: yz?.hoverShadow || "",
      transition: yz?.transition || "background-color 0.5, color 0.3s",
    },
  }));

  return (
    <>
      <CustomButton
        variant={variant ? variant : "contained"}
        size={size ? size : "medium"}
        startIcon={startIcon}
        endIcon={endIcon}
        loading={loading}
        {...props}
      >
        {text || "Sign in"}
      </CustomButton>
    </>
  );
};

export default Muibutton;
