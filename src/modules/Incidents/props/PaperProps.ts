import { Incident } from '../models/entities/Incidents';
import { LocationType } from '../models/types/LocationType';

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
  place: string;
  img?: string;
  time: string;
}