import React, { useState, useEffect } from "react";
import { Form, Radio } from "semantic-ui-react";
export default function FilterIncidents({ setAvailables }: any) {
  const [onlyAvailables, setOnlyAvailables] = useState<boolean>(false);

  useEffect(() => {
    setAvailables(onlyAvailables);
  }, [onlyAvailables]);

  return (
    <Form
      className="bg-dark mx-auto w-75 corner p-2 border border-secondary"
      style={{ borderRadius: "15px" }}
    >
      <Form.Field className="mx-auto  w-75">
        <Radio
          className="mt-1"
          label="Mostrar solo casos no resueltos"
          name="radioGroup"
          value="all"
          checked={onlyAvailables}
          onChange={() => setOnlyAvailables(!onlyAvailables)}
          toggle
        />
      </Form.Field>
      {/* 
        <Form.Field className='d-inline ml-4'>
          <Radio
            label='No resueltos'
            name='radioGroup'
            value='unresolved'
            checked={selectRadio === 'unresolved'}
            onChange={ () => setSelectRadio('unresolved')}
            toggle
          />
        </Form.Field>

        <Form.Field className='d-inline ml-4'>
          <Radio
            label='Plazas disponibles'
            name='radioGroup'
            value='disponible'
            checked={selectRadio === 'disponible'}
            onChange={ () => setSelectRadio('disponible')}
            toggle
          />
        </Form.Field>*/}
    </Form>
  );
}
