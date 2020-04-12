import React from "react";
import { PageHeaderProps } from '../../../props/PaperProps';

function PageHeader({ title }: PageHeaderProps) {
  return (
    <div className="PaperHead">
      <span className="headline hl5">{ title }</span>
      <p>
        <span className="headline hl6">
          "La realidad es la punta del iceberg
        </span>
      </p>
    </div>
  );
}

export default PageHeader;
