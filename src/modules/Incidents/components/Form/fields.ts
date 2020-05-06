export const incidentFormFields: Array<formfield> = [
    {
        type: 'string',
        name: 'titulo',
        validation: { required: 'El campo título es requerido', minLength: 15, maxLength: 33 }
    },
    {
        type: 'textarea',
        name: 'descripcion',
    },
    {
        type: 'file',
        name: 'imagen',
        validation: { required: 'El campo es requerido' }
    },
    {
        type: 'date',
        name: 'fecha',
        validation: { required: 'El campo fecha es requerido', pattern: /^(\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01]))$/ }
    },
    {
        type: 'time',
        name: 'hora',
        validation: { required: 'El campo hora es requerido', pattern: /^([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/ }
    },
    {
        type: 'number',
        name: 'maxResearchers',
        validation: { required: 'El campo investigadores máximos es requerido', maxLength: 33 }
    }]

    type fields = 'titulo' | 'descripcion' | 'imagen' | 'fecha' | 'hora' | 'maxResearchers';

    type formfield = {
        type: string;
        name: fields;
        validation?: Object
        
    }
