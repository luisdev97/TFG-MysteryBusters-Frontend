import { Incident } from '../../../../../mystery-busters/src/anomalies/entities/incident.entity';
export type IncidentsPaperProps = {
    incidents: Array<Incident[]>
    onLoadMore: Function
}