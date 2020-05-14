import { LocationType } from '../types/LocationType';

export interface Incident {
    id: number;
    belong_to_anomaly?: any;
    title: string;
    description: string;
    img?: string;
    location: LocationType;
    date: string;
    time: string; 
    maxResearchers: number;
    resolved: boolean;
    //researchers: Researcher[];
}    

export interface createIncidentInput {
    anomaly_id: number;
    title: string;
    description: string;
    img: string;
    location: LocationType;
    date: string;
    time: string; 
    maxResearchers: number;
}

export interface updateIncidentInput {
    title?: string;
    description?: string;
    img?: string;
    location?: LocationType;
    date?: string;
    time?: string; 
    maxResearchers?: number;
    resolved?: boolean
}
  