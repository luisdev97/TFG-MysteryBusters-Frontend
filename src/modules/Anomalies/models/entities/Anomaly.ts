import { Researcher } from "../../../Researchers/models/entities/Researcher";
import { Incident } from "../../../Incidents/models/entities/Incidents";

export interface Anomaly {
    id: number;
    creator: Researcher;
    description: string;
    type: string;
    incidents: Incident[];
}    
    