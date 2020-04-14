import React from "react";
import "./Page.css";
import PageHeader from "./PageHeader";
import PageImage from "./PageImage";
import { PageProps } from '../../../props/PaperProps';
import PageContent from './PageContent';

function Page({ numPage, incident }: PageProps) {
  const { title, description, img, date, time } = incident;

  return (
    <div className={ "incident-column " + (numPage === 1 ? "page1" : "page2") }>
       <PageHeader title={ title } />
       <PageImage time={ time } img={ img }/>
       <PageContent date={ date } description={ description }/>
    </div>
  );
}

export default Page;
