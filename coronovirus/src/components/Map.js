import React, { useState } from "react";
import { ComposableMap, Geographies, Geography, Annotation, ZoomableGroup} from "react-simple-maps";
import LocationMarker from './LocationMarker';

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const Map = () => {
    const [zoom, setZoom] = useState(1);

    const coordinates = [
      // US Locations
      // {long: -118.384434, lat: 34.040348, name: "UCLA Medical"},
      // {long: -118.445353, lat: 34.069072, name: "UCLA Health Internal Medicine Physicians"},
      {long: -118.291547, lat: 34.103174, name: "Kaiser Permanente Los Angeles Medical Center", address: "4867 Sunset Blvd, Los Angeles, CA 90027"},
      
      // Asia Locations
      {long: 114.129255, lat: 22.268874, name: "School of Public Health, The University of Hong Kong", address: "7 Sassoon Rd, Sandy Bay, Hong Kong"},
      {long: 103.847211, lat: 1.322317, name: "National Centre for Infectious Diseases (NCID)", address: "16 Jln Tan Tock Seng, Singapore 308442"},
    
      // Europe Locations
      {long: 2.311227, lat: 48.840469, name: "Institut Pasteur", address: "25-28 Rue du Dr Roux, 75015 Paris, France"},
      {long: -0.108711, lat: 51.501537, name: "Public Health England", address: "Wellington House, 133-155 Waterloo Rd, Bishop's, London SE1 8UG, United Kingdom"},
    
      // Australia Location
      {long: 144.956177, lat: -37.798862, name: "Victorian Infectious Diseases Services", address: "9/300 Grattan St, Parkville VIC 3050, Australia"},
    
      //{long:-98, lat:33}
    ];

    function zoomIn () {
        setZoom(zoom * 2);
    }

  return (
    <ComposableMap>
      <ZoomableGroup zoom={zoom} zoomIn={zoomIn}>
        <Geographies geography={geoUrl}>
            {({ geographies }) =>
            geographies.map(geo => 
              ( <Geography key={geo.rsmKey} geography={geo} fill="#DDD" stroke="#FFF"/>))}
        </Geographies>
            { coordinates.map((coordinates) =>
                <LocationMarker long={coordinates.long} lat={coordinates.lat} zoomIn={zoomIn}/>
            )}
            { coordinates.map((coordinates) =>
              <Annotation
                  subject={[coordinates.long, coordinates.lat]}
                  dx={-5}
                  dy={-10}
                  connectorProps={{ stroke: "#FF5533", strokeWidth: 1, strokeLinecap: "round" }}>
            
                  <text x="-8" textAnchor="end" style ={{fontSize:5}} alignmentBaseline="middle" fill="#F53">
                    {coordinates.name + "\n: " + coordinates.address}
                  </text>
              </Annotation>
            )}

        {/* <ZoomableGroup center={[position.lat, position.long] }> */}
            {/* <LocationMarker lat={position.lat} long={position.long} zoomIn={zoomIn} >
            </LocationMarker> */}
         {/* </ZoomableGroup> */}

         {/* <ZoomableGroup center={[30, 30] }> */}
            {/* <LocationMarker lat={100} long={30} zoomIn={zoomIn} center={[100, 30] }>
            </LocationMarker> */}
         {/* </ZoomableGroup> */}

        
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default Map;
