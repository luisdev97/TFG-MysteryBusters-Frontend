import React, { useState, useEffect } from "react";
import { Form, Radio } from "semantic-ui-react";
export default function FilterIncidents({ setAvailables }: any) {
  const [onlyAvailables, setOnlyAvailables] = useState<boolean>(false);

  useEffect(() => {
    setAvailables(onlyAvailables);
  }, [onlyAvailables]);

  return (
    <Form
      className="bg-dark mx-auto w-75 corner border border-secondary mb-5"
      style={{ borderRadius: "15px", height: "60px" }}
    >
      <Form.Field className="mx-auto w-75">
        <Radio
          label="Mostrar solo casos no resueltos"
          className='ml-5 mb-2'
          name="radioGroup"
          value="all"
          checked={onlyAvailables}
          onChange={() => setOnlyAvailables(!onlyAvailables)}
          toggle
        />
      </Form.Field>
    </Form>
  );
}
