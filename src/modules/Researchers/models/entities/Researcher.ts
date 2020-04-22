import { Competencie } from './Competencie';
import { Anomaly } from '../../../Anomalies/models/entities/Anomaly';
import { Incident } from '../../../Incidents/models/entities/Incidents';

export interface Researcher {
    id: number;
    firstname: string;
    lastname: string;
    username: string;
    email: string; 
    password: string;
    age: number
    avatar?: string;
    role?: string;
    competencies: Competencie[]
    posted_anomalies: Anomaly[]
    assigned_incidents: Incident[]
}    