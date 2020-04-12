import { Incident } from '../models/entities/Incidents';

export type IncidentsPaperProps = {
    incidents: Array<Incident[]>;
    loadMore: Function;
}

export type PageSetProps = {
  incidents: Incident[];
}

export type PageProps = {
  numPage: number;
  incident: Incident;
}

export type PageHeaderProps = {
  title: string;
}

export type PageContentProps = {
  date: string;
  time: string;
}