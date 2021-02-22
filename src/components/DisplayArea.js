import React, { useEffect } from "react";

function DisplayArea(props) {
  const FetchData = async () => {};

  useEffect(() => {
    FetchData();
  }, []);

  return <div style={props.styling}>Here is the data you want to see !!</div>;
}

export default DisplayArea;
