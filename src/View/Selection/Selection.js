import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import styled from "@emotion/styled";
const Selection = ({
  labelName,
  variant,
  label,
  options,
  allselectsx,
  withoutlined,
  selectsx,
  onChange,
  defaultValue,
  onBlur,
  onFocus,
  optionsx,
  optionColor,
  multiple,
  ...props
}) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [multipleselectedValue, setMultipleSelectedValue] = useState([]);

  const handleChange = (event) => {
    if (multiple) {
      // Handle multiple select
      const { value } = event.target;
      if (multipleselectedValue.includes(value)) {
        setMultipleSelectedValue(
          multipleselectedValue.filter((e) => e !== value)
        );
      } else {
        if (value) {
          setMultipleSelectedValue((prevState) => [...prevState, value]);
        }
      }

      // You can perform any other actions with the selected values here
    } else {
      // Handle single select
      setSelectedValue(event.target.value);
      // You can perform any other actions with the selected value here
      console.log("Selected value:", event.target.value);
    }
  };
  console.log(multipleselectedValue.toString());
  const CustomFormControlField = styled(FormControl)(({ theme }) => ({
    width: allselectsx?.width || "200px",
    color: allselectsx?.color || "black",
    outline: "none",
    margin: allselectsx?.margin,
    padding: allselectsx?.padding,
    fontSize: allselectsx?.fontSize || "16px",
    fontWeight: allselectsx?.fontWeight || 600,
    backgroundColor: allselectsx?.backgroundColor || "#00000",
    border: allselectsx?.border || "0px solid #ccc",
    borderRadius: allselectsx?.borderRadius || "4px",
    // Additional custom styles
    lineHeight: allselectsx?.lineHeight || "", // Sets the line height to 1.5
    boxShadow: allselectsx?.boxShadow || "0 2px 4px rgba(0, 0, 0, 0.1)", // Adds a box shadow for a subtle elevation effect boxShadow:allselectsx?.boxShadow || "0 2px 4px rgba(0, 0, 0, 0.1)", // Adds a box shadow for a subtle elevation effect
    transition: allselectsx?.transition || "background-color 0.3s, color 0.3s", // Adds a smooth transition for color and background changes
    cursor: allselectsx?.cursor || "pointer", // Sets the cursor to a pointer on hover
    "&:hover": {
      backgroundColor: allselectsx?.backgroundColor || "#e0e0e0", // Custom background color on hover
      color: allselectsx?.color || "#333", // Custom text color on hover
    },
    "&:focus": {
      backgroundColor: allselectsx?.backgroundColor || "#fff", // Custom background color when focused
      color: allselectsx?.color || "#000", // Custom text color when focused
      borderColor: allselectsx?.borderColor || "#000", // Custom border color when focused
    },
    "&:disabled": {
      opacity: allselectsx?.opacity || 0.6, // Reduced opacity for disabled state
      cursor: allselectsx?.cursor || "not-allowed", // Set cursor to not-allowed when disabled
      pointerEvents: allselectsx?.pointerEvents || "none", // Disable pointer events when disabled
    },
    "&.Mui-error": {
      borderColor: allselectsx?.borderColor || "red", // Custom border color when in error state
    },
  }));
  const CustomSelectField = styled(Select)(({ theme }) => ({
    "& .MuiInputLabel-root": {
      color: "red",
    },

    "&..Mui-disabled": {
      display: "none",
    },
    "& .MuiSelect-select": {
      // If value is empty, hide the selected value in the box
      color: selectedValue
        ? "inherit"
        : label && labelName
        ? "transparent"
        : "inherit",
      // display: "none",
    },
    width: selectsx?.width || "200px",
    color: selectsx?.color || "black",
    outline: "none",
    margin: selectsx?.margin,
    padding: selectsx?.padding,
    fontSize: selectsx?.fontSize || "16px",
    fontWeight: selectsx?.fontWeight || 600,
    backgroundColor: selectsx?.backgroundColor || "#00000",
    border: selectsx?.border || "0px solid #ccc",
    borderRadius: selectsx?.borderRadius || "4px",
    // Additional custom styles
    lineHeight: selectsx?.lineHeight || "", // Sets the line height to 1.5
    boxShadow: selectsx?.boxShadow || "0 2px 4px rgba(0, 0, 0, 0.1)", // Adds a box shadow for a subtle elevation effect boxShadow:selectsx?.boxShadow || "0 2px 4px rgba(0, 0, 0, 0.1)", // Adds a box shadow for a subtle elevation effect
    transition: selectsx?.transition || "background-color 0.3s, color 0.3s", // Adds a smooth transition for color and background changes
    cursor: selectsx?.cursor || "pointer", // Sets the cursor to a pointer on hover
    "&:hover": {
      backgroundColor: selectsx?.backgroundColor || "#e0e0e0", // Custom background color on hover
      color: selectsx?.color || "#333", // Custom text color on hover
    },
    "&:focus": {
      backgroundColor: selectsx?.backgroundColor || "#fff", // Custom background color when focused
      color: selectsx?.color || "#000", // Custom text color when focused
      borderColor: selectsx?.borderColor || "#000", // Custom border color when focused
    },
    "&:disabled": {
      opacity: selectsx?.opacity || 0.6, // Reduced opacity for disabled state
      cursor: selectsx?.cursor || "not-allowed", // Set cursor to not-allowed when disabled
      pointerEvents: selectsx?.pointerEvents || "none", // Disable pointer events when disabled
    },
    "&.Mui-error": {
      borderColor: selectsx?.borderColor || "red", // Custom border color when in error state
    },
  }));
  const CustomMenuItemField = styled(MenuItem)(({ theme }) => ({
    width: optionsx?.width || selectsx?.width,
    color: optionsx?.color || "black",
    outline: "none",
    margin: optionsx?.margin,
    padding: optionsx?.padding,
    fontSize: optionsx?.fontSize || "16px",
    fontWeight: optionsx?.fontWeight || 600,
    background: optionsx?.background || "",
    backgroundColor: optionsx?.backgroundColor || "#00000",
    border: optionsx?.border || "0px solid #ccc",
    borderRadius: optionsx?.borderRadius || "4px",
    // Additional custom styles
    lineHeight: optionsx?.lineHeight || "", // Sets the line height to 1.5
    boxShadow: optionsx?.boxShadow || "0 2px 4px rgba(0, 0, 0, 0.1)", // Adds a box shadow for a subtle elevation effect boxShadow:selectsx?.boxShadow || "0 2px 4px rgba(0, 0, 0, 0.1)", // Adds a box shadow for a subtle elevation effect
    transition: optionsx?.transition || "background-color 0.3s, color 0.3s", // Adds a smooth transition for color and background changes
    cursor: optionsx?.cursor || "pointer", // Sets the cursor to a pointer on hover
    "&:hover": {
      backgroundColor: optionsx?.backgroundColor || "#e0e0e0", // Custom background color on hover
      color: optionsx?.color || "#333", // Custom text color on hover
    },
    "&:focus": {
      backgroundColor: optionsx?.backgroundColor || "#fff", // Custom background color when focused
      color: optionsx?.color || "#000", // Custom text color when focused
      borderColor: optionsx?.borderColor || "#000", // Custom border color when focused
    },
    "&:disabled": {
      opacity: optionsx?.opacity || 0.6, // Reduced opacity for disabled state
      cursor: optionsx?.cursor || "not-allowed", // Set cursor to not-allowed when disabled
      pointerEvents: optionsx?.pointerEvents || "none", // Disable pointer events when disabled
    },
    "&.Mui-error": {
      borderColor: optionsx?.borderColor || "red", // Custom border color when in error state
    },
  }));

  return (
    <CustomFormControlField variant={variant || "outlined"}>
      {!withoutlined && (
        <InputLabel
          id={labelName}
          sx={{
            fontSize: selectsx?.fontSize || "16px",
            fontWeight: selectsx?.fontWeight || 600,
            color: "red",

            "&.Mui-focused": {
              color: "red", // Change label color when focused
            },
          }}
        >
          {labelName}
        </InputLabel>
      )}
      <CustomSelectField
        labelId={labelName}
        id="demo-simple-select"
        label={label} // Set the default label to "none"
        inputProps={{
          "aria-label": withoutlined ? "Without label" : "With label",
        }}
        displayEmpty
        defaultValue={defaultValue ? props.defaultValue : ""} // Default value for the select
        autoFocus={props.autoFocus} // Set to true to focus the select on render
        onChange={onChange || handleChange} // Function to handle value change
        value={multiple ? (multipleselectedValue.toString()) : selectedValue} // Control the selected value using state (if using as a controlled component)
        onBlur={onBlur} // Function to handle blur event
        onFocus={onFocus} // Function to handle focus event
        multiple={props.multiple} // Set to true for multiple select
        autoWidth={props.autoWidth} // Set to true to auto-adjust the width of the menu to match the select width
        disableUnderline={props.disableUnderline} // Set to true to disable the underline
      >
        {options.map((option, i) => (
          <CustomMenuItemField
            key={i}
            value={option.value}
            defaultValue={option?.default}
            onClick={
              multiple ? (event) => event.stopPropagation() : console.log("hi")
            }
          >
            {option.Text}
          </CustomMenuItemField>
        ))}
      </CustomSelectField>
    </CustomFormControlField>
  );
};

export default Selection;
