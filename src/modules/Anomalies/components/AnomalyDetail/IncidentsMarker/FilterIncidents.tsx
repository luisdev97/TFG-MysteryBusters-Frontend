import React, { useState, useEffect } from "react";
import { Form, Radio, Icon, Label } from "semantic-ui-react";
export default function FilterIncidents({ setAvailables }: any) {
  const [onlyAvailables, setOnlyAvailables] = useState<boolean>(false);

  useEffect(() => {
    setAvailables(onlyAvailables);
  }, [onlyAvailables]);

  return (
    <div className="w-100 d-flex justify-content-center">
      <Label className="bg-transparent mx-auto">
        <Icon size="huge" link name={!onlyAvailables ? "lock" : "unlock"} onClick={() => setOnlyAvailables(!onlyAvailables)} color={!onlyAvailables ? "black" : "green"} />
        <h3 className="d-inline">Mostrar casos resueltos</h3>
      </Label>
    </div>
  )
}
