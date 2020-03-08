import React from "react";
import { Marker } from "react-simple-maps";

// center = {[position.lat, position.long]}
function LocationMarker (props) {
    const {zoomIn} = props;

    return (
            <Marker coordinates={[props.long, props.lat]}>
                <circle r={10} fill="#F53" onClick={zoomIn}/>
            </Marker>    
    )
}

export default LocationMarker;