import React from "react";
import { Marker } from "react-simple-maps";

function LocationMarker (props) {
    const {zoomIn} = props;
    return (
        <Marker coordinates={[props.lat, props.long]}>
            <circle r={2} fill="#F53" onClick={zoomIn}/>
        </Marker>    
    )
}

export default LocationMarker;