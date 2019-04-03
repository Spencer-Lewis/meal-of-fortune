import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField"

export default function InputForm(props) {
    return (
      <div>
        <Button 
          variant="contained" 
          color="primary"
          onClick={props.handleFormSubmit}>
            Submit Form
        </Button> 
      </div>
    );
}
