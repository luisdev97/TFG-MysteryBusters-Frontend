import React from 'react'
import CustomForm from '../../../../UI/CustomForm';
import INCIDENT_SCHEMA from './validation';
import { incidentFormFields } from './fields';

export default function FormularioIncidentes() {
    return (
        <CustomForm fields={incidentFormFields} validationSchema={INCIDENT_SCHEMA}/>
    )
}
