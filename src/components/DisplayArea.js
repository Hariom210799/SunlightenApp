import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "semantic-ui-react";

const jsonConverter = require("json-array-converter");

function DisplayArea(props) {
  const [stateData, setStateData] = useState();
  const [render, setRender] = useState(0);
  const [direction, setDirection] = useState(null);
  const [column, setColumn] = useState(null);
  var data_arr = [];
  var temp = [];

  var config = {
    method: "get",
    url: "https://api.covid19india.org/state_district_wise.json",
    headers: {
      // 'Content-Type': 'application/json'
    },
  };

  const FetchData = async () => {
    console.log("Data is about to fetch !!");
    await axios(config)
      .then(function (response) {
        // setStateData(jsonConverter.toArray(response.data));
        setStateData(response.data);

        Object.keys(response.data).forEach((k) => {
          Object.keys(response.data[k].districtData).forEach((v) => {
            temp.push({
              district_name: v,
              ...response.data[k].districtData[v],
            });
          });
          data_arr.push({
            state: k,
            districts: temp,
            ...response.data[k],
          });
          temp = [];
        });

        data_arr.forEach((i) => delete i.districtData);
        data_arr.forEach((i) => {
          i.active = 0;
          i.confirmed = 0;
          i.deceased = 0;
          i.recovered = 0;
          i.districts.forEach((x) => {
            i.active = i.active + x.active;
            i.confirmed = i.confirmed + x.confirmed;
            i.deceased = i.deceased + x.deceased;
            i.recovered = i.recovered + x.recovered;
          });
        });
        console.log("DATAARRAY", data_arr.length);
        console.log("DATAARRAY", data_arr);

        console.log("Data Saved");
        setRender(render + 1);
        // console.log("DATA:", stateData);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div style={props.styling}>
      {data_arr ? (
        <>
          <h1>Data Rendered</h1>
          <Table sortable celled fixed>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell
                  sorted={column === "statename" ? direction : null}
                  // onClick={}
                >
                  State Name
                </Table.HeaderCell>
                <Table.HeaderCell
                  sorted={column === "confirmed" ? direction : null}
                  // onClick={}
                >
                  Confirmed
                </Table.HeaderCell>
                <Table.HeaderCell
                  sorted={column === "active" ? direction : null}
                  // onClick={}
                >
                  Active
                </Table.HeaderCell>
                <Table.HeaderCell
                  sorted={column === "recovered" ? direction : null}
                  // onClick={}
                >
                  Recovered
                </Table.HeaderCell>
                <Table.HeaderCell
                  sorted={column === "deceased" ? direction : null}
                  // onClick={}
                >
                  Deceased
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {data_arr &&
                data_arr.map(
                  ({
                    state,
                    confirmed,
                    active,
                    deceased,
                    recovered,
                    statecode,
                  }) => (
                    <Table.Row key={statecode}>
                      <Table.Cell>{state}</Table.Cell>
                      <Table.Cell>{confirmed}</Table.Cell>
                      <Table.Cell>{active}</Table.Cell>
                      <Table.Cell>{recovered}</Table.Cell>
                      <Table.Cell>{deceased}</Table.Cell>
                    </Table.Row>
                  )
                )}
            </Table.Body>
          </Table>
        </>
      ) : (
        <h1>Loading....</h1>
      )}
    </div>
  );
}

export default DisplayArea;
