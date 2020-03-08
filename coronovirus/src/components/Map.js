import React, { useState } from "react";
import { ComposableMap, Geographies, Geography, Annotation, ZoomableGroup} from "react-simple-maps";
import LocationMarker from './LocationMarker';

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const Map = () => {
    const [zoom, setZoom] = useState(1);
    const position = {
        lat: -74.006,
        long: 40.7128
    };
   
    function zoomIn () {
        setZoom(zoom * 2);
    }

  return (
    <ComposableMap>
      <ZoomableGroup zoom={zoom} zoomIn={zoomIn} position={position} center={[position.lat, position.long]}>
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
        <LocationMarker lat={position.lat} long={position.long} zoomIn={zoomIn}> </LocationMarker>
        <Annotation
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
        </Annotation>
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default Map;
