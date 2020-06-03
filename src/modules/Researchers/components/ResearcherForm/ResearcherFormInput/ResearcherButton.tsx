import React from "react";

export default function ResearcherButton({ handleSubmit }: any) {
  return (
    <button className="btn block-cube block-cube-hover" type="submit">
      <div className="bg-top">
        <div className="bg-inner"></div>
      </div>
      <div className="bg-right">
        <div className="bg-inner"></div>
      </div>
      <div className="bg">
        <div className="bg-inner"></div>
      </div>
      <div className="text">Log In</div>
    </button>
  );
}
