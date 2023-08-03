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
        // multiple
        labelName="ram"
        allselectsx={{ margin: "0px 20px" }}
        selectsx={{ width: "200px" }}
        optionsx={{ width: "200px" }}
        options={[
          { value: "", Text: "None" },
          { value: "Age1", Text: "Age1" },
          { value: "Age2", Text: "Age2" },
        ]}
      />

      <Selection
        options={[
          { value: "", Text: "None" },
          { value: "Age1", Text: "Age1" },
          { value: "Age2", Text: "Age2" },
        ]}
      />

      <Selection
        variant="filled"
        labelName="zsd"
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
