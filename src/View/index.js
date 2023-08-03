import React from "react";
import Selection from "./Selection/Selection";
function View() {
  return (
    <>
      <h1>View Component</h1>
      <Selection
        // variant : [outlined,filled,standard]
        // variant="standard"

        native
        multiple
        labelName="ram"
        allselectsx={{ margin: "0px 20px" }}
        selectsx={{ width: "200px", dropdowniconcolor: "green" }}
        optionsx={{ width: "200px" }}
        options={[
          { value: "", Text: "None" },
          { value: "Age1", Text: "Age1" },
          { value: "Age2", Text: "Age2" },
        ]}
      />

      <Selection
        sx={{ width: "200px" }}
        options={[
          { value: "", Text: "None" },
          { value: "Age1", Text: "Age1" },
          { value: "Age2", Text: "Age2" },
        ]}
      />

      <div style={{ margin: "0px 20px" }}>
        <Selection
          variant="filled"
          labelName="zsd"
          // allselectsx={{ margin: "0px 20px" }}
          selectsx={{ width: "200px" }}
          optionsx={{ width: "200px", backgroundColor: "red" }}
          options={[
            { value: "", Text: "None" },
            { value: "Age1", Text: "Age1" },
            { value: "Age2", Text: "Age2" },
          ]}
        />
      </div>

      <Selection
        variant="standard"
        allselectsx={{ margin: "0px 20px" }}
        selectsx={{ width: "200px" }}
        optionsx={{ width: "200px" }}
        labelName="zsd"
        options={[
          { value: "", Text: "None" },
          { value: "Age1", Text: "Age1" },
          { value: "Age2", Text: "Age2" },
        ]}
      />
      <br />

      <Selection
        sx={{ boxShadow: "0" }}
        allselectsx={{
          borderRadius: "500px",
          outline: "none",
          margin: "10px 20px",
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


      
    </>
  );
}

export default View;
