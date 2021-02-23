import React, { Component } from "react";
import axios from "axios";
import { Table, Icon, Button } from "semantic-ui-react";
import DistrictModal from "./DistrictModal";
import DisplayDistrict from "./DisplayDistrict";
const jsonConverter = require("json-array-converter");
var _ = require("lodash");

var config = {
  method: "get",
  url: "https://api.covid19india.org/state_district_wise.json",
  headers: {
    // 'Content-Type': 'application/json'
  },
};

export default class DisplayArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stateData: {},
      direction: null,
      column: null,
      data_arr: [],
      temp: [],
      touched: false,
      modalData: [],
      modal: false,
      flag: true,
    };
  }

  async FetchData() {
    let arr1 = [],
      arr2 = [];

    await axios(config)
      .then(function (response) {
        // setStateData(jsonConverter.toArray(response.data));
        // this.setState({ stateData: response.data });

        Object.keys(response.data).forEach((k) => {
          Object.keys(response.data[k].districtData).forEach((v) => {
            arr1.push({
              district_name: v,
              ...response.data[k].districtData[v],
            });
          });
          arr2.push({
            state: k,
            districts: arr1,
            ...response.data[k],
          });
          arr1 = [];
        });

        arr2.forEach((i) => delete i.districtData);
        arr2.forEach((i) => {
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
        delete arr2[0];
        console.log("DATAARRAY", arr2.length);
        console.log("DATAARRAY", arr2);
        console.log("Data Saved");
      })
      .catch(function (error) {
        console.log(error);
      });
    this.setState({ data_arr: arr2 });
  }

  componentDidMount() {
    this.FetchData();
  }

  handleSortClick(col_name) {
    if (this.state.column === col_name) {
      return this.setState({
        data_arr: this.state.data_arr.slice().reverse(),
        direction:
          this.state.direction === "ascending" ? "descending" : "ascending",
      });
    }

    var sorted = [];

    if (col_name === "state") {
      sorted = []
        .concat(this.state.data_arr)
        .sort((a, b) => (a.state > b.state ? 1 : -1));
    } else if (col_name === "active") {
      sorted = []
        .concat(this.state.data_arr)
        .sort((a, b) => (a.active > b.active ? 1 : -1));
    } else if (col_name === "recovered") {
      sorted = []
        .concat(this.state.data_arr)
        .sort((a, b) => (a.recovered > b.recovered ? 1 : -1));
    } else if (col_name === "deceased") {
      sorted = []
        .concat(this.state.data_arr)
        .sort((a, b) => (a.deceased > b.deceased ? 1 : -1));
    } else if (col_name === "confirmed") {
      sorted = []
        .concat(this.state.data_arr)
        .sort((a, b) => (a.confirmed > b.confirmed ? 1 : -1));
    }

    this.setState({
      column: col_name,
      data_arr: sorted,
      // data_arr: sorted,
      direction: "ascending",
    });
    this.forceUpdate();
    // console.log("SORTED: ", this.state.data_arr);
  }

  render() {
    return (
      <div style={this.props.styling}>
        {this.state.flag ? (
          <Table sortable celled fixed>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell
                  sorted={
                    this.state.column === "state" ? this.state.direction : null
                  }
                  onClick={() => this.handleSortClick("state")}
                >
                  State Name
                </Table.HeaderCell>
                <Table.HeaderCell
                  sorted={
                    this.state.column === "confirmed"
                      ? this.state.direction
                      : null
                  }
                  onClick={() => this.handleSortClick("confirmed")}
                >
                  Confirmed
                </Table.HeaderCell>
                <Table.HeaderCell
                  sorted={
                    this.state.column === "active" ? this.state.direction : null
                  }
                  onClick={() => this.handleSortClick("active")}
                >
                  Active
                </Table.HeaderCell>
                <Table.HeaderCell
                  sorted={
                    this.state.column === "recovered"
                      ? this.state.direction
                      : null
                  }
                  onClick={() => this.handleSortClick("recovered")}
                >
                  Recovered
                </Table.HeaderCell>
                <Table.HeaderCell
                  sorted={
                    this.state.column === "deceased"
                      ? this.state.direction
                      : null
                  }
                  onClick={() => this.handleSortClick("deceased")}
                >
                  Deceased
                </Table.HeaderCell>
                <Table.HeaderCell
                  sorted={
                    this.state.column === "share" ? this.state.direction : null
                  }
                  // onClick={}
                >
                  Share Details
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {this.state.data_arr ? (
                this.state.data_arr.map((item, index) => {
                  return (
                    <Table.Row key={item.statecode}>
                      <Table.Cell
                        selectable={true}
                        style={{ paddingLeft: 10, cursor: "pointer" }}
                        onClick={() =>
                          this.setState({
                            modalData: item.districts,
                            // modal: true,
                            flag: false,
                          })
                        }
                      >
                        {item.state}
                      </Table.Cell>
                      <Table.Cell>{item.confirmed}</Table.Cell>
                      <Table.Cell>{item.active}</Table.Cell>
                      <Table.Cell>{item.recovered}</Table.Cell>
                      <Table.Cell>{item.deceased}</Table.Cell>
                      <Table.Cell>
                        <Icon name="share" />
                      </Table.Cell>
                    </Table.Row>
                  );
                })
              ) : (
                <Table.Row>
                  <Table.Cell>No Data</Table.Cell>
                </Table.Row>
              )}
            </Table.Body>
          </Table>
        ) : (
          <>
            <Button
              positive
              icon
              labelPosition="left"
              style={{ margin: "1%" }}
              onClick={() => this.setState({ flag: true })}
            >
              <Icon name="arrow left" />
              GO BACK
            </Button>
            <DisplayDistrict data={this.state.modalData} />
          </>
        )}

        {/* <DistrictModal
          districtData={this.state.modalData}
          modal={this.state.modal}
        /> */}
      </div>
    );
  }
}
