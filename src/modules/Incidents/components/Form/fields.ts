import { fieldsType } from '../../../../UI/fieldsType';
export const incidentsFieldsMap: Array<fieldsType<incidentsFields>> = [
    {
        type: 'string',
        name: 'title',
        span: 'título',
    },
    {
        type: 'textarea',
        name: 'description',
        span: 'descripción'
    },
    {
        type: 'file',
        name: 'img',
        span: 'imagen',
    },
    {
        type: 'date',
        name: 'date',
        span: 'fecha',
    },
    {
        type: 'time',
        name: 'time',
        span: 'hora',
    },
    {
        type: 'number',
        name: 'maxResearchers',
        span: 'plazas disponibles',
    }];

    export type incidentsFields = 'title' | 'description' | 'img' | 'date' | 'time' | 'maxResearchers';

    export type FormData = {
        title: string;
        description: string;
        img: string;
        date: string;
        time: string;
        maxResearchers: number
    };
    