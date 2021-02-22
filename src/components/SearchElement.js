import React, { useState } from "react";
import { Search, Grid, Header, Segment, Label } from "semantic-ui-react";

const handleSearchChange = () => {
  console.log("Hello");
};

function SearchElement(props) {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [value, ssetValue] = useState("");

  return (
    <Grid.Column style={{ flex: 1 }}>
      <h2>{props.label} : </h2>
      <Search loading={loading} />
    </Grid.Column>
  );
}

export default SearchElement;
