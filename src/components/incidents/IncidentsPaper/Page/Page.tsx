import React from "react";
import "./Page.css";
import PageHeader from "./PageHeader";
import PageImage from "./PageImage";

function Page({ numPage }: PageProps) {
  return (
    <div className={"incident-column " + (numPage === 2 ? "page2" : "")}>
      <PageHeader />
      <PageImage/>

      <p className="incident-text">
        El Incidente de Roswell, que tuvo lugar en julio de 1947, es mucho más
        que el hallazgo de unos restos no identificados en un rancho de Nuevo
        México. Supone más de media década de misterio y especulaciones sobre un
        extraño suceso, que fue difuminado una y otra vez por las fuerzas de
        seguridad americanas.
        seguramente durante años, el Incidente OVNI de Roswell seguirá siendo un
        misterio..
      </p>
     
    </div>
  );
}

type PageProps = {
  numPage: number;
};

export default Page;
