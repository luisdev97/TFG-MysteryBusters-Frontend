import React, { useState, createContext, useContext } from "react";
import "./AnomalyDetail.css";
import ReactMapboxGl, { Layer, Feature, Image } from "react-mapbox-gl";
import markerIcon from "../../../../assets/icons/ovni.png";

import { IncidentsMapProps } from '../../props/Anomalies';

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoibHVpc2Rldjk3IiwiYSI6ImNrOWVsdzAyMjAyeWYza3QwMnpma3dndm0ifQ.VwXoQUAvKYe6haGTFRIPCA",
})


function IncidentsMap({ point } : IncidentsMapProps) {
  //const [center, setCenter] = useState<LocationType>({ lng:-5.9818, lat: 37.3565 });
  const { lat, lng } = point;
  return (
      <Map
        style="mapbox://styles/mapbox/dark-v9"
        containerStyle={mapStyles}
        center={[lng, lat]}
        zoom={[14]}
        className="map-container"
        onClick={(map: unknown, event: any) => { console.log(event.lngLat)}}
      >
        <Image id={"ufo"} url={markerIcon} options={{ width: "90px" }} />
        <Layer type="symbol" id="marker" layout={{ "icon-image": "ufo" }} >
          <Feature coordinates={[lng, lat]} draggable />
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
