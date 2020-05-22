import { Anomaly } from '../models/entities/Anomaly';
import { LocationType } from '../../Incidents/models/types/LocationType';
import { Incident } from '../../Incidents/models/entities/Incidents';
import { Dispatch, SetStateAction } from 'react';

export type AnomaliesListProps = {
    anomalies: Anomaly[];
    create: Function;
}

export type AnomalyItemProps = {
    anomaly: Anomaly;
}

export type AnomalyDetailProps = {
    anomaly: Anomaly;
    mutation: Function;
}

export type IncidentsMarkerProps = {
    incidents: Incident[];
    handleChangeLocation: Dispatch<SetStateAction<LocationType>>;
    mutation: Function;
}

export type IncidentMarkerProps = {
    incident: Incident;
    handleChangeLocation: Dispatch<SetStateAction<LocationType>>;
    mutation: Function;
}

export type IncidentsMapProps = {
    point: LocationType;
    anomaly_id: number;
}