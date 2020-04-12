import React from "react";
import { PageContentProps } from '../../../props/PaperProps';

function PageContent({ date, time }: PageContentProps) {
  return (
    <>
      <p className="incident-text">
        El Incidente de Roswell, que tuvo lugar en julio de 1947, es mucho más
        que el hallazgo de unos restos no identificados en un rancho de Nuevo
        México. Supone más de media década de misterio y especulaciones sobre un
        extraño suceso, que fue difuminado una y otra vez por las fuerzas de
        seguridad americanas. seguramente durante años, el Incidente OVNI de
        Roswell seguirá siendo un misterio..
      </p>
      <small className="incident-date">{ date }</small>
    </>
  );
}

export default PageContent;
