import { Anomaly } from '../models/entities/Anomaly';
import { LocationType } from '../../Incidents/models/types/LocationType';
import { Incident } from '../../Incidents/models/entities/Incidents';

export type AnomaliesListProps = {
    anomalies: Anomaly[];
}

export type AnomalyItemProps = {
    anomaly: Anomaly;
}

export type AnomalyDetailProps = {
    anomaly: Anomaly;
}

export type IncidentsMapProps = {
    point: LocationType;
}

export type IncidentsMarkerProps = {
    incidents: Incident[];
}