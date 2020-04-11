import { LocationType } from '../types/LocationType';

export interface Incident {
    id: number;
    belong_to_anomaly: any;
    description: string;
    location: LocationType;
    date: string;
    time: string; 
    maxResearchers: number;
    resolved: boolean;
    //researchers: Researcher[];
}    
    
    /*
    id: number;
    anomaly_id?: Anomaly['id'];
    belong_to_anomaly: Anomaly;
    description: string;
    location: LocationType;
    date: string;
    time: string; 
    maxResearchers: number;
    resolved: boolean;
    researchers: Researcher[];
    */
    