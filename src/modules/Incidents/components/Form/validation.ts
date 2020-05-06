import * as yup from 'yup';

const fileType: string = 'image';
function validateFileFormat(allowedType: string, actualType: string): boolean {
    return allowedType.includes(actualType.split('/')[0]);
}

const INCIDENT_SCHEMA = yup.object().shape({
    title: yup.string().required("el titulo es requerido").min(15, 'El título debe contener un mínimo de 15 caracteres').max(33, 'El título puede contener un máximo de 33 caracteres'),
    description: yup.string().required("la descripción es requerida").min(200).max(250),

    imagen: yup.mixed().required('Es obligatorio subir una imagen').typeError('La imagen es requerida')
        .test('No se ha subido ningún archivo', 'La imagen es requerida', (value) => {
            return (value['0']);
        })
        .test('formato de archivo inválido', 'Solo se pueden subir imagenes', (value) => {
            console.log(value['0']);
            return value['0'] && validateFileFormat(fileType, value['0'].type);
        }),

    fecha: yup.string().required("La fecha es requerida"),
    hora: yup.string().required("La hora es requerida"),
    maxResearchers: yup.number().typeError("Debes indicar el número de plazas").min(1, 'Se debe ofertar al menos una plaza').max(4, 'Solo se pueden ofertar cuatro plazas')
});

export default INCIDENT_SCHEMA;