import React from "react";
import { Button } from "semantic-ui-react";

function ButtonGroup(props) {
  return (
    <div style={props.styling}>
      <Button onClick={() => props.toggleMethod(props.one)} positive>
        {props.one}
      </Button>
      <Button onClick={() => props.toggleMethod(props.two)}>{props.two}</Button>
    </div>
  );
}

export default ButtonGroup;
