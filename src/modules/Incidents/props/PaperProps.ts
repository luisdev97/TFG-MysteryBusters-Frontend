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
  description: string;
  date: string;
}

export type PageImageProps = {
  img: string;
  time: string;
}