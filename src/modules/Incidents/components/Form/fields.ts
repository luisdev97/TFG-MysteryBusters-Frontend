export const incidentFormFields: Array<formfield> = [
    {
        type: 'string',
        name: 'titulo',
        get getName() { return `El campo ${this.name} es requerido`},
        validation: { required: 'El campo título es requerido', maxLength: 33 }
    },
    {
        type: 'textarea',
        name: 'descripcion',
        get getName() { return `El campo ${this.name} es requerido`},
        validation: { required: 'El campo descripción es requerido', minLength: 233 }
    },
    {
        type: 'file',
        name: 'imagen',
        get getName() { return `El campo ${this.name} es requerido`},
        validation: { required: 'El campo es requerido' }
    },
    {
        type: 'date',
        name: 'fecha',
        get getName() { return `El campo ${this.name} es requerido`},
        validation: { required: 'El campo fecha es requerido', pattern: /^(\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01]))$/ }
    },
    {
        type: 'time',
        name: 'hora',
        get getName() { return `El campo ${this.name} es requerido`},
        validation: { required: 'El campo hora es requerido', pattern: /^([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$/ }
    },
    {
        type: 'number',
        name: 'maxResearchers',
        get getName() { return `El campo ${this.name} es requerido`},
        validation: { required: 'El campo investigadores máximos es requerido', maxLength: 33 }
    }]

    type fields = 'titulo' | 'descripcion' | 'imagen' | 'fecha' | 'hora' | 'maxResearchers';

    type formfield = {
        type: string;
        name: fields;
        getName: string;
        validation: Object
    }


    /*<input name="firstName" ref={register({ required: true, maxLength: 20 })} />
      <input name="lastName" ref={register({ pattern: /^[A-Za-z]+$/i })} />
      <input name="age" type="number" ref={register({ min: 18, max: 99 }*/