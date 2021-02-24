import React from "react";
import { Grid } from "semantic-ui-react";
import SearchElement from "./SearchElement";

function SearchArea(props) {
  const complete_data = props.data ? props.data : [];
  let district_arr = [];

  if (props.data)
    props.data.forEach(
      (e) => (district_arr = district_arr.concat(e.districts))
    );

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
          <SearchElement data={complete_data} label="State" keyword="state" />
          <SearchElement
            data={district_arr}
            label="District"
            keyword="district_name"
          />
          {/* <SearchElement label="Area" /> */}
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default SearchArea;
