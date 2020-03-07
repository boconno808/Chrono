import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const Map = () => {
  return (
    <ComposableMap>
      <ZoomableGroup>
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
        <Marker coordinates={[-74.006, 40.7128]}>
            <circle r={2} fill="#F53" />
        </Marker>
        <Marker coordinates={[-98, 33]}>
            <circle r={2} fill="#F53" />
        </Marker>
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