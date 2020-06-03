import * as yup from 'yup';

export const RESEARCHER_VALIDATION_SCHEMA: yup.ObjectSchema<Object> = yup.object().shape({
    firstname: yup.string().required('El nombre es requerido').min(3, 'Debe contener al menos 3 caracteres'),
    lastname: yup.string().required('Los apellidos son requeridos').min(8, 'Debe contener al menos 8 caracteres'),
    email: yup.string().email('No es un email válido').required("El email es requerido"),
    password: yup.string().required('La contraseña es requerida').min(4, "La longitud mínima es de 4 caracteres")
})
