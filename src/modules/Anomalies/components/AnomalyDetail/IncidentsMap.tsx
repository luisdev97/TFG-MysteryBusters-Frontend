import React, { useState } from "react";
import "./AnomalyDetail.css";
import ReactMapboxGl, { Layer, Feature, Image, Popup } from "react-mapbox-gl";
import { IncidentsMapProps } from "../../props/Anomalies";
import { Button, Icon } from "semantic-ui-react";
import markerIcon from "../../../../assets/icons/ovni.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContext";

const private_key: string =
  "pk.eyJ1IjoibHVpc2Rldjk3IiwiYSI6ImNrOWVsdzAyMjAyeWYza3QwMnpma3dndm0ifQ.VwXoQUAvKYe6haGTFRIPCA";
const api_url: string = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
const Map = ReactMapboxGl({
  accessToken: private_key,
  maxZoom: 19
});

function IncidentsMap({ point, anomaly_id }: IncidentsMapProps) {
  const { lat, lng } = point;
  const [center, setCenter] = useState<[number, number]>([lng, lat]);
  const [popupProps, setPopupPros] = useState<any>({
    visible: false, location: {}
  });

  return (
    <AuthContext.Consumer>
      {({ me }) => (
        <Map
          style="mapbox://styles/mapbox/dark-v9"
          containerStyle={mapStyles}
          center={center}
          zoom={[14]}
          className="map-container"
          onDblClick={async (m: any, e: any) => {
            if(!me) return;
            const { lat, lng } = e.lngLat;
            const place = await getPlaceByCoords({ lat, lng });
            const location = { lat, lng, place };
            setCenter([lng, lat]);
            setPopupPros({ visible: true, location });
          }}
          onClick={() => setPopupPros({ ...popupProps, visible: false })}
        >
          <Image id={"ufo"} url={markerIcon} options={{ width: "90px" }} />

          {popupProps.visible && (
            <Popup coordinates={[center[0], center[1]]}>
              <Button.Group>
                <Button
                  onClick={() => setPopupPros({ ...popupProps, visible: false })}
                >
                  Cancelar
              </Button>
                <Button.Or text="<>" />
                <Link
                  to={{
                    pathname: `/anomalies/${anomaly_id}/form`,
                    state: { location: popupProps.location, anomaly_id }
                  }}
                >
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
      )}
    </AuthContext.Consumer>
  );
}

const mapStyles = {
  height: "50%",
  width: "90%",
  top: "10%",
  left: "5%",
  borderRadius: "1.5%"
};


function getPlaceByCoords(coords: any): string {
  const location: any = fetch(`${api_url}${coords.lng},${coords.lat}.json?access_token=${private_key}`);

  const response: string = location.then(async (res: any) =>
    await res.text().then(((res: any) => {
      let place = JSON.parse(res).features[0].place_name;
      let city = JSON.parse(res).features[3].text;
      place = place.split(',')[0];
      return `${place}, ${city}`;
    })));

  return response;
}

export default IncidentsMap;
