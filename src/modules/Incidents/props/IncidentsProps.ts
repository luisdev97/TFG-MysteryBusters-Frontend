import { Incident } from '../models/entities/Incidents';

export type IncidentsPaperProps = {
    incidents: Array<Incident[]>
    loadMore: Function
  }