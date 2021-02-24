import React, { Component } from "react";
import axios from "axios";
import { Table, Icon } from "semantic-ui-react";
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
      data_arr: this.props.data,
      temp: [],
      touched: false,
      state_name: this.props.state_name,
    };
  }

  //   componentDidMount() {
  //     this.FetchData();
  //   }

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
      <div>
        <div style={{ margin: "1%" }}>
          <h3>{this.state.state_name} Statistics</h3>
        </div>
        <div>
          <Table sortable celled fixed>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell
                  sorted={
                    this.state.column === "state" ? this.state.direction : null
                  }
                  onClick={() => this.handleSortClick("state")}
                >
                  District Name
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
                {/* <Table.HeaderCell
                  sorted={
                    this.state.column === "share" ? this.state.direction : null
                  }
                  // onClick={}
                >
                  Share Details
                </Table.HeaderCell> */}
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {this.state.data_arr.length ? (
                this.state.data_arr.map((item, index) => {
                  return (
                    <Table.Row key={index}>
                      <Table.Cell>{item.district_name}</Table.Cell>
                      <Table.Cell>{item.confirmed}</Table.Cell>
                      <Table.Cell>{item.active}</Table.Cell>
                      <Table.Cell>{item.recovered}</Table.Cell>
                      <Table.Cell>{item.deceased}</Table.Cell>
                      {/* <Table.Cell>
                        <Icon name="share" />
                      </Table.Cell> */}
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
        </div>
      </div>
    );
  }
}
