import React, { useState } from "react";
import "./AnomalyDetail.css";
import ReactMapboxGl, { Layer, Feature, Image, Popup } from "react-mapbox-gl";
import { IncidentsMapProps } from "../../props/Anomalies";
import { Button, Icon } from "semantic-ui-react";
import markerIcon from "../../../../assets/icons/ovni.png";
import { Link } from 'react-router-dom';

const private_key = "pk.eyJ1IjoibHVpc2Rldjk3IiwiYSI6ImNrOWVsdzAyMjAyeWYza3QwMnpma3dndm0ifQ.VwXoQUAvKYe6haGTFRIPCA";
const Map = ReactMapboxGl({
  accessToken: private_key
});

function IncidentsMap({ point }: IncidentsMapProps) {
  const { lat, lng } = point;
  const [popupProps, setPopupPros] = useState<any>({
    visible: false,
    coords: {}
  });

  return (
    <Map
      style="mapbox://styles/mapbox/dark-v9"
      containerStyle={mapStyles}
      center={[lng, lat]}
      zoom={[14]}
      className="map-container"
      onDblClick={async (m: unknown, e: any) => {
        const { lat, lng } = e.lngLat;
        const coords = { lat, lng };
        setPopupPros({ visible: true, coords });
      }}
      onClick={() => setPopupPros({ ...popupProps, visible: false })}
    >
      <Image id={"ufo"} url={markerIcon} options={{ width: "90px" }} />

      {popupProps.visible && (
        <Popup coordinates={[popupProps.coords.lng, popupProps.coords.lat]}>
          <Button.Group>
            <Button
              onClick={() => setPopupPros({ ...popupProps, visible: false })}
            >
              Cancelar
            </Button>
            <Button.Or text="<>" />
            <Link to={{
              pathname: '/form',
              state: { location: popupProps.coords }
            }}>
            <Button positive>
              <Icon name="add" color="grey" />
              Incidente
            </Button>
            </Link>
            
          </Button.Group>
        </Popup>
      )}

      <Layer type="symbol" id="marker" layout={{ "icon-image": "ufo" }}>
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
