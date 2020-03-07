import React, { useState } from "react";
import { Marker } from "react-simple-maps";

function LocationMarker (props) {
    return (
        <Marker coordinates={[props.long, props.lat]}>
            <circle r={2} fill="#F53" />
        </Marker>    
    )
}

export default LocationMarker;
