import React, { useState } from "react";
import "./AnomalyDetail.css";
import ReactMapboxGl, { Layer, Feature, Image } from "react-mapbox-gl";
import markerIcon from "../../../../assets/icons/ovni.png"

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoibHVpc2Rldjk3IiwiYSI6ImNrOWVsdzAyMjAyeWYza3QwMnpma3dndm0ifQ.VwXoQUAvKYe6haGTFRIPCA"
});

function IncidentsMap() {
  const [center, setCenter] = useState<[number,number]>([-5.9818, 37.3565])
  return (
    
    <Map
      style="mapbox://styles/mapbox/dark-v9"
      containerStyle={mapStyles}
      center={center}
      zoom={[14]}
      className="map-container"
    >
      <Image id={"ufo"} url={markerIcon} options={{width: "90px"}}/>
      <Layer type="symbol" id="marker" layout={{ "icon-image": "ufo" }}>
        <Feature coordinates={center} draggable />
      </Layer>
    </Map>
  );

}

const mapStyles = {
  height: "50%",
  width: "90%",
  top: "15%",
  left: "5%",
  borderRadius: "1.5%"
};

export default IncidentsMap;
