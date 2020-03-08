import React, { useState } from "react";
import { ComposableMap, Geographies, Geography, Annotation, ZoomableGroup} from "react-simple-maps";
import LocationMarker from './LocationMarker';

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const Map = () => {
    const [zoom, setZoom] = useState(1);
    // const [coordinates, setCoordinates] = useState([]);

    const coordinates = [
        {lat: -10, long: 2},
        {lat: -30, long: 30},
        {lat: 50, long: 100}
    ];

    // function updateCoordinates (props) {
    //     setCoordinates([...coordinates, props]);
    // }



    // const position = {
    //     // lat: -74.006,
    //     // long: 40.7128
    //     lat:10,
    //     long:10
    // };
   
    function zoomIn () {
        setZoom(zoom * 2);
    }

    // function centerZoom() {
    //     cen
    // }

  return (
    <ComposableMap>
      <ZoomableGroup zoom={zoom}>
        <Geographies geography={geoUrl}>
            {({ geographies }) =>
            geographies.map(geo => (
                <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#DDD"
                stroke="#FFF"
                />
            ))
            }
        </Geographies>
            {coordinates.map((coordinates) =>
                <LocationMarker lat={coordinates.lat} long={coordinates.long}/>
            )}

        {/* <ZoomableGroup center={[position.lat, position.long] }> */}
            {/* <LocationMarker lat={position.lat} long={position.long} zoomIn={zoomIn} >
            </LocationMarker> */}
         {/* </ZoomableGroup> */}

         {/* <ZoomableGroup center={[30, 30] }> */}
            {/* <LocationMarker lat={100} long={30} zoomIn={zoomIn} center={[100, 30] }>
            </LocationMarker> */}
         {/* </ZoomableGroup> */}

        {/* <Annotation
            subject={[-98, 33]}
            dx={-5}
            dy={-10}
            connectorProps={{
            stroke: "#FF5533",
            strokeWidth: 1,
            strokeLinecap: "round"
            }}>
            <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#F53">
            {"Rachel's Home"}
            </text>
        </Annotation> */}
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default Map;
