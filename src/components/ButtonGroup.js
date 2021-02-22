import React from "react";
import { Button } from "semantic-ui-react";

function ButtonGroup() {
  return (
    <div
      style={{
        flex: 1,
        flexDirection: "row",
        margin: "2%",
        textAlign: "center",
      }}
    >
      <Button positive>Search</Button>
      <Button active>Clear</Button>
    </div>
  );
}

export default ButtonGroup;
