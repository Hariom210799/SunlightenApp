import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { Header, Icon, Divider } from "semantic-ui-react";
import SearchArea from "../components/SearchArea";
import DisplayState from "../components/DisplayState";
import ButtonGrp from "../components/ButtonGroup";
import "../assets/style.css";

var config = {
  method: "get",
  url: "https://api.covid19india.org/state_district_wise.json",
  headers: {
    // 'Content-Type': 'application/json'
  },
};

var arr = [];

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
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
    this.setState({ data: arr2.slice() });
    // arr = arr2;
    this.forceUpdate();
  }

  componentDidMount() {
    this.FetchData();
  }

  render() {
    const loading = this.state.data.length === 0;
    return (
      <div className="demo-big-content">
        <Header
          inverted
          as="h1"
          className="head"
          style={{ padding: "2%", margin: "1%", borderRadius: 10 }}
        >
          <Icon name="medrt" />
          Covid19 Data Tracker
        </Header>

        {loading ? <SearchArea /> : <SearchArea data={this.state.data} />}
        {/* <ButtonGrp styling={{
        flex: 1,
        flexDirection: "row",
        margin: "2%",
        textAlign: "center",
      }} one="Search" two="Clear" /> */}
        <Divider style={{ margin: "2%" }} clearing />

        {loading ? (
          <h2 style={{ textAlign: "center", marginTop: "5%" }}>Loading...</h2>
        ) : (
          <DisplayState data={this.state.data} styling={{ margin: "2%" }} />
        )}
      </div>
    );
  }
}
