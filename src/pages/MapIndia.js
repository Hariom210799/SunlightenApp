import React from "react";
import { Table, Icon, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Map from "map-my-india-react-new-version";
import MapmyIndia, { MapMarker } from "react-mapmyindia";
import Iframe from "react-iframe";
// import L from "leaflet";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../assets/styleMap.css";

// var mapOptions = {
//   center: [17.385044, 78.486671],
//   zoom: 10,
// };
// var MapIt = new L.map("map", mapOptions);
// var layer = new L.TileLayer(
//   "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// );
// MapIt.addLayer(layer);

function MapIndia() {
  // var map = new MapmyIndia.Map("map", {
  //   center: [28.61, 77.23],
  //   zoomControl: true,
  //   hybrid: true,
  // });

  //   var layers = MapmyIndia. covidLayer();

  return (
    <div style={{ flex: 1, flexDirection: "row" }}>
      <div>
        <Link to="/">
          <Button positive icon labelPosition="left" style={{ margin: "1%" }}>
            <Icon name="arrow left" />
            GO BACK
          </Button>
        </Link>
      </div>
      <div
        style={{
          flex: 1,
          flexDirection: "row",
          //   width: "100%",
          width: "100%",
          height: "600px",
          // alignSelf: "flex-end",
          // justifyContent: "flex-end",
          marginLeft: "5%",
          marginRight: "5%",
          background_color: "red",
        }}
      >
        {/* <div style={{ width: "100%" }}>
          <Map
            zoom={4}
            markers={[
              {
                position: [18.5314, 73.845],
                draggable: true,
                title: "Marker title",
                onClick: (e) => {
                  console.log("clicked");
                },
                onDragend: (e) => {
                  console.log("dragged");
                },
              },
            ]}
          />
        </div> */}
        {/* <div id="mapid">
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div> */}
        <Iframe
          url="https://maps.mapmyindia.com/corona?zoom=5"
          // url="https://maps.mapmyindia.com/corona?lat=26.8749616&lng=75.7361819&zoom=5"
          width="90%"
          height="600px"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
        />
      </div>
    </div>
  );
}

export default MapIndia;
