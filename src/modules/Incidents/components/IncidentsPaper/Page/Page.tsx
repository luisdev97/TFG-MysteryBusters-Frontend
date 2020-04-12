import React from "react";
import "./Page.css";
import PageHeader from "./PageHeader";
import PageImage from "./PageImage";
import { PageProps } from '../../../props/PaperProps';
import PageContent from './PageContent';

function Page({ numPage, incident }: PageProps) {
  const { description, date, time } = incident;

  return (
    <div className={ "incident-column " + (numPage === 1 ? "" : "") }>
       <PageHeader title={ description }/>
       <PageImage/>
       <PageContent date={ date } time={ time }/>
    </div>
  );
}

export default Page;
