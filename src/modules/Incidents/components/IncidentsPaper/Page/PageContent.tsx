import React from "react";
import { PageContentProps } from '../../../props/PaperProps';

function PageContent({ date, description }: PageContentProps) {
  return (
    <>
      <p className="incident-text">
        { description }
      </p>
      <small className="incident-date">{ date }</small>
    </>
  );
}

export default PageContent;
