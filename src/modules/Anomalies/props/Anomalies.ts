import { Anomaly } from '../models/entities/Anomaly';

export type AnomaliesListProps = {
    anomalies: Anomaly[];
}

export type AnomalyItemProps = {
    anomaly: Anomaly;
}

export type AnomalyDetailProps = {
    anomaly: Anomaly;
}