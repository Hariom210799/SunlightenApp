import React from 'react'
import { VectorMap } from "react-jvectormap";
const map = [
    {code: "IN-RJ",
    value: 10000},
    {code: "IN-MP",
    value: 800},
    {code: "IN-DL",
    value: 900},
    {code: "IN-KL",
    value: 500}
    ];
    

function getdata(key) {
    var countryData = [];
    map.forEach(function(obj){
    countryData[obj.code] = obj.value;
    });
    return countryData[key];
    }
    
    function getalldata() {
    var countryData = [];
    map.forEach(function(obj){
    countryData[obj.code] = obj.value;
    });
    return countryData;
    }
    
    
    //getdata(key) is function that maps code to the value of array (JSON)and it return only value specific state code
    const handleshow2 = (e, el, code) => {
      el.html(el.html() + ` <br> Statics: ${getdata(code)}`);
    };
    //on hover on state, it call getdata(with state code) and display it on screen

function dummy() {
    return (
        <VectorMap
            map={"in_merc"}
            backgroundColor="transparent"
            focusOn={{
            x: 0.5,
            y: 0.5,
            scale: 0,
            animate: false
            }}
            zoomOnScroll={true}
            containerStyle={{
            width: "100%",
            height: "80%",
            backgroundColor:'blue'
            }}
            updateSize={true}
            onRegionClick={console.log("Loo")} //gets the country code
            onRegionTipShow={handleshow2}
            containerClassName="map"
            regionStyle={{
            initial: {
                fill: "#e4e4e4",
                "fill-opacity": 0.9,
                stroke: "none",
                "stroke-width": 0,
                "stroke-opacity": 0
            },
            hover: {
                "fill-opacity": 0.8,
                cursor: "pointer"
            },
            selected: {
                fill: "#2938bc" // onclick colour of state
            },
            }}
            backgroundColor="green"
            regionsSelectable={false}
            series={{
            regions: [
                {
                    values: getalldata(), //can be directly served //with api response or any data
                    scale: ['#C8EEFF', '#0071A4'], //color range
                    normalizeFunction: "polynomial"
                }
            ]
            }}
/>
    )
}

export default dummy
