import { Incident } from "../models/entities/Incidents";

export type IncidentsFormProps = {
    mutation: Function;
    initialState: Incident;
}