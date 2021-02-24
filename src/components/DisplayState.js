import React, { Component } from "react";
import {
  Form,
  Input,
  Header,
  Modal,
  Table,
  Icon,
  Button,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import DistrictModal from "./DistrictModal";
import DisplayDistrict from "./DisplayDistrict";
import Iframe from "react-iframe";
const jsonConverter = require("json-array-converter");
// var _ = require("lodash");

export default class DisplayArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stateData: {},
      direction: null,
      column: null,
      data_arr: this.props.data.slice(),
      temp: [],
      touched: false,
      modalData: [],
      modal: false,
      flag: true,
      mailModal: false,
      sendingData: null,
      email: "",
      state_name: "",
    };
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
      data_arr: sorted.slice(),
      direction: "ascending",
    });
    // this.forceUpdate();
    // console.log("SORTED: ", this.state.data_arr);
  }

  handleEmailChange(value) {
    this.setState({ email: value });
  }

  sendEmail(data, mailid) {
    var sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: ` ${mailid}`, // Change to your recipient
      from: "s17_ukalkar_jayesh@mgmcen.ac.in", // Change to your verified sender
      subject: `Covid19 ${data.state} Details`,
      text: "and easy to do anywhere, even with Node.js",
      html: `<strong>${data}</strong>`,
    };
    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount() {}

  render() {
    var arr = this.state.data_arr;
    // console.log("PROPS REDCEIDI:", this.state.data_arr);
    return (
      <div style={this.props.styling}>
        {this.state.flag ? (
          <Link to="/mapofindia">
            <Button
              positive
              icon
              labelPosition="right"
              style={{ margin: "1%" }}
              // onClick={}
            >
              <Icon name="right arrow" />
              MAP OF INDIA
            </Button>
          </Link>
        ) : (
          <></>
        )}
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
                    <Table.Row key={item.statecode}>
                      <Table.Cell
                        selectable={true}
                        style={{ paddingLeft: 10, cursor: "pointer" }}
                        onClick={() =>
                          this.setState({
                            modalData: item.districts,
                            // modal: true,
                            state_name: item.state,
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
                      {/* <Table.Cell>
                        <Button
                          icon
                          labelPosition="right"
                          onClick={() =>
                            this.setState({
                              mailModal: true,
                              sendingData: item,
                            })
                          }
                        >
                          Share via Mail
                          <Icon name="share" />
                        </Button>
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
            <Button
              negative
              style={{ margin: "1%" }}
              onClick={() => this.setState({ mapModal: true })}
            >
              Visualize on Map
            </Button>
            <DisplayDistrict
              mapModal={this.state.mapModal}
              data={this.state.modalData}
              state_name={this.state.state_name}
            />
          </>
        )}

        <Modal
          closeIcon
          open={this.state.mailModal}
          // trigger={<Button>Show Modal</Button>}
          onClose={() => this.setState({ mailModal: false, email: "" })}
          onOpen={() => this.setState({ mailModal: true })}
        >
          <Header icon="mail" content="Share Covid Data via Mail" />
          <Modal.Content>
            <Form>
              <Form.Input
                placeholder="Name"
                name="name"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button
              color="red"
              onClick={() => this.setState({ mailModal: false, email: "" })}
            >
              <Icon name="remove" /> Cancel
            </Button>
            <Button
              color="green"
              onClick={() => {
                this.sendEmail(this.state.sendingData, this.state.email);
                this.setState({ mailModal: false, email: "" });
              }}
            >
              <Icon name="send" /> Send Email
            </Button>
          </Modal.Actions>
        </Modal>

        <Modal
          open={this.state.mapModal}
          onClose={() => this.setState({ mapModal: false })}
          onOpen={() => this.setState({ mapModal: true })}
          // trigger={<Button>Scrolling Content Modal</Button>}
        >
          <Modal.Header>Map</Modal.Header>
          <Modal.Content image scrolling>
            <Iframe
              url={`https://maps.mapmyindia.com/corona/${this.state.state_name}?state_corona_stats&lat=26.8749616&lng=75.7361819&zoom=9`}
              width="100%"
              height="600px"
              // id="myId"
              // className="myClassname"
              // display="initial"
              // position="relative"
            />
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={() => this.setState({ mapModal: false })}>
              Close
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}
