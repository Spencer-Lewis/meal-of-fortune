import React from "react";
import Button from "@material-ui/core/Button";

export default function InputForm(props) {
    return (
      <div>
        <Button 
          variant="contained" 
          color="primary"
          onClick={props.handleRandomizeButton}>
            GIVE ME THAT SHIT
        </Button> 
      </div>
    );
}
