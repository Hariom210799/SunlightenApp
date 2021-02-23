import React, { useState } from "react";
import { Header, Icon, Divider } from "semantic-ui-react";
import SearchArea from "../components/SearchArea";
import DisplayArea from "../components/DisplayState";
import ButtonGrp from "../components/ButtonGroup";
import "../assets/style.css";

/*********** Merge all the Districts into ONE ARRAY [NEW] ************* */
/*********** Single State Districts are not visible separately to sort ! ************* */

function HomePage() {
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
      <SearchArea />
      {/* <ButtonGrp styling={{
        flex: 1,
        flexDirection: "row",
        margin: "2%",
        textAlign: "center",
      }} one="Search" two="Clear" /> */}
      <Divider style={{ margin: "2%" }} clearing />

      <DisplayArea styling={{ margin: "2%" }} />
    </div>
  );
}

export default HomePage;
