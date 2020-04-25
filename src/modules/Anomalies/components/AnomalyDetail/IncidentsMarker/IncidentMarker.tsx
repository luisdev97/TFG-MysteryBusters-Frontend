import React from 'react';
import { ListItem, ListHeader as Header } from 'semantic-ui-react';
import { IncidentMarkerProps } from '../../../props/Anomalies';

const IncidentMarker = ({ incident }: IncidentMarkerProps) => {
    return (
        <ListItem className="bg-dark mx-auto incident-marker">
            <Header content={incident.title || "Avistamiento de Wailor en la casa de zeus"} className="text-center"/>
        </ListItem>
    );
};

export default IncidentMarker;