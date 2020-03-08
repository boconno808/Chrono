import React from "react";
import { ComposableMap, Geographies, Geography, Annotation, ZoomableGroup} from "react-simple-maps";
import LocationMarker from './LocationMarker';
import {FormattedMessage} from 'react-intl'

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const Map = () => {
    //const [zoom, setZoom] = useState(1);

    const coordinates = [
      // US Locations
      // {long: -118.384434, lat: 34.040348, name: "UCLA Medical"},
      // {long: -118.445353, lat: 34.069072, name: "UCLA Health Internal Medicine Physicians"},
      {long: -118.291547, lat: 34.103174,
         name: <FormattedMessage id="app.map.kaiser.name"
         defaultMessage="Kaiser Permanente Los Angeles Medical Center"
         description="Kaiser Name"/>,
         address: <FormattedMessage id="app.map.kaiser.address"
         defaultMessage="4867 Sunset Blvd, Los Angeles, CA 90027"
         description="Kaiser Address"/>},

      // Asia Locations
      {long: 114.129255, lat: 22.268874,
        name: <FormattedMessage id="app.map.hk.name"
        defaultMessage="School of Public Health, The University of Hong Kong"
        description="HK Name"/>,
        address:  <FormattedMessage id="app.map.hk.address"
        defaultMessage="7 Sassoon Rd, Sandy Bay, Hong Kong"
        description="HK Address"/>},
      {long: 103.847211, lat: 1.322317,
        name: <FormattedMessage id="app.map.singapore.name"
        defaultMessage="National Centre for Infectious Diseases (NCID)"
        description="Singapore Name"/>,
        address:  <FormattedMessage id="app.map.singapore.address"
        defaultMessage="16 Jln Tan Tock Seng, Singapore 308442"
        description="Singapore Address"/>},

      // Europe Locations
      {long: 2.311227, lat: 48.840469,
        name: <FormattedMessage id="app.map.paris.name"
        defaultMessage="Institut Pasteur"
        description="Paris Name"/>,
        address:  <FormattedMessage id="app.map.paris.address"
        defaultMessage="25-28 Rue du Dr Roux, 75015 Paris, France"
        description="Paris Address"/>},
      {id: "app.map.london", long: -0.108711, lat: 51.501537,
        name: <FormattedMessage id="app.map.england.name"
        defaultMessage="Public Health England"
        description="England Name"/>,
        address: <FormattedMessage id="app.map.england.address"
        defaultMessage="Wellington House, 133-155 Waterloo Rd, Bishop's, London SE1 8UG, United Kingdom"
        description="England Address"/>
       },

      // Australia Location
      {id: "app.map.australia", long: 144.956177, lat: -37.798862,
      name: <FormattedMessage id="app.map.aus.name"
        defaultMessage="Victorian Infectious Diseases Services"
        description="Aus Name"/>,
        address: <FormattedMessage id="app.map.aus.address"
        defaultMessage="9/300 Grattan St, Parkville VIC 3050, Australia"
        description="Aus Address"/>},
    ];

    // function zoomIn () {
    //     setZoom(zoom * 2);
    // }

  return (
    <ComposableMap>
      <ZoomableGroup>
        <Geographies geography={geoUrl}>
            {({ geographies }) =>
            geographies.map(geo =>
              ( <Geography key={geo.rsmKey} geography={geo} fill="#DDD" stroke="#FFF"/>))}
        </Geographies>
            { coordinates.map((coordinates) =>
                <LocationMarker long={coordinates.long} lat={coordinates.lat}/>
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
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default Map;
