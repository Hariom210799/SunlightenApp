import React from "react";
import { Grid } from "semantic-ui-react";
import SearchElement from "./SearchElement";

function SearchArea() {
  return (
    <div
      style={{
        marginLeft: "5%",
        // textAlign: "center",
        marginTop: "2.5%",
      }}
    >
      <Grid>
        <Grid.Row stretched={true}>
          <SearchElement label="State" />
          <SearchElement label="District" />
          <SearchElement label="Area" />
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default SearchArea;
