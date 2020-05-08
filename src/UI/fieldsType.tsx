import { incidentsFields } from '../modules/Incidents/components/Form/fields';

export type tiposPermitidos = incidentsFields;

export interface fieldsType<T> {
    type: string;
    name: T;
    span: string;
}

export type tiposDeForm = incidentsFields | tipo2 | tipo3;

export type tipo2 = 'title' | 'description' | 'img' | 'date' | 'time' | 'maxResearchers';
export type tipo3 = 'title' | 'description' | 'img' | 'date' | 'time' | 'maxResearchers';


