import React, { useState, useEffect } from "react";
import CustomForm from "../../../../UI/CustomForm";
import INCIDENT_SCHEMA from "./validation";
import { incidentsFieldsMap } from "./fields";
import { useParams, useHistory } from "react-router";


export default function FormularioIncidentes() {
  const [formData, setFormData] = useState<FormData>();
  const { location : { state: { location  }}} = useHistory()
  console.log(location)
  useEffect(() => {
      console.log(formData);
  }, [formData])

  return (
    <CustomForm
      fields={incidentsFieldsMap}
      validationSchema={INCIDENT_SCHEMA}
      handleChanges={setFormData}
    />
  );
}
