import React from "react";
import "./AnomalyDetail.css";
import ReactMapboxGl, { Layer, Marker, Feature, Image } from "react-mapbox-gl";
import markerIcon from "../../../../assets/icons/ovni.png"

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoibHVpc2Rldjk3IiwiYSI6ImNrOWVsdzAyMjAyeWYza3QwMnpma3dndm0ifQ.VwXoQUAvKYe6haGTFRIPCA"
});

function IncidentsMap() {
  return (
    
    <Map
      style="mapbox://styles/mapbox/streets-v11"
      containerStyle={mapStyles}
      center={[-5.9818, 37.3565]}
      zoom={[14]}
    >
      <Image id={"ufo"} url={markerIcon}/>
      <Layer type="symbol" id="marker" layout={{ "icon-image": "ufo" }}>
        <Feature coordinates={[-5.9818, 37.3565]} draggable />
      </Layer>
    </Map>
  );
}

const mapStyles = {
  height: "50%",
  width: "40%",
  top: "30%",
  left: "3%",
  borderRadius: "1.5%"
};

export default IncidentsMap;
