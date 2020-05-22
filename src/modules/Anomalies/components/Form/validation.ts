import * as yup from 'yup';

export const ANOMALY_VALIDATION_SCHEMA: yup.ObjectSchema<Object> = yup.object().shape({
    type: yup.string().required('Debes indicar un tipo').min(3, 'Debes indicar un tipo'),
    description: yup.string().required('La descripción es requerida')
})
