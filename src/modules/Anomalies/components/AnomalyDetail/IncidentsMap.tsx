import React from "react";
import { Container } from "semantic-ui-react";
import "./AnomalyDetail.css";
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoibHVpc2Rldjk3IiwiYSI6ImNrOWVsdzAyMjAyeWYza3QwMnpma3dndm0ifQ.VwXoQUAvKYe6haGTFRIPCA"
});

function IncidentsMap() {
  return (
    <Map
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={mapStyles}
      center={[-5.9818, 37.3565]}
    >
      <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }} >
        
        <Marker coordinates={[-5.9818, 37.3565]} anchor="bottom">
          <img
            src={
              "https://img.pngio.com/computer-icons-google-map-maker-marker-p-22492-png-images-pngio-google-map-icon-png-900_520.png"
            }
          />
        </Marker>
        
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
