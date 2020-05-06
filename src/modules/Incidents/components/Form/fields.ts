export const incidentFormFields: Array<incidentsFormfield> = [
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
        validation: { required: 'El campo fecha es requerido', pattern: /^(\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01]))$/ }
    },
    {
        type: 'time',
        name: 'time',
        span: 'hora',
        validation: { required: 'El campo hora es requerido', pattern: /^([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/ }
    },
    {
        type: 'number',
        name: 'maxResearchers',
        span: 'plazas disponibles',
    }]

    type fields = 'title' | 'description' | 'img' | 'date' | 'time' | 'maxResearchers';

    export type incidentsFormfield = {
        type: string;
        name: fields;
        span: string;
        validation?: Object
    }
