import React from "react";
import { Marker, ZoomableGroup } from "react-simple-maps";


// center = {[position.lat, position.long]}
function LocationMarker (props) {
    const {zoomIn} = props;

    return (
        // <ZoomableGroup zoom={1}>
            <Marker coordinates={[props.lat, props.long]}>
                <circle r={2} fill="#F53" onClick={zoomIn}/>
            </Marker>    
        // </ZoomableGroup>
    )
}

export default LocationMarker;