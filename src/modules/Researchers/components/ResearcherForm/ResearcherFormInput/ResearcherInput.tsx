import React from "react";

export default function ResearcherInput({ type, name, placeholder }: any) {
  return (
    <div className="control block-cube block-input">
      <input
        name={name}
        placeholder={placeholder}
        type={type}
        className="bg-transparent"
      />
      <div className="bg-top">
        <div className="bg-inner"></div>
      </div>

      <div className="bg-right">
        <div className="bg-inner"></div>
      </div>

      <div className="bg">
        <div className="bg-inner"></div>
      </div>
    </div>
  );
}
