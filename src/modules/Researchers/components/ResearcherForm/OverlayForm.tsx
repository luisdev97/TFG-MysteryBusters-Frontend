import React from "react";

export default function OverlayForm({ setMode }: any) {
  return (
    <div className="overlay-wrapper">
      <div className="overlay">

        <div className="overlay-panel overlay-left">
          <button className="ghost" onClick={() => setMode()}> IR AL LOGIN </button>
        </div>

        <div className="overlay-panel overlay-right">
          <button className="ghost" onClick={() => setMode()}> IR AL REGISTRO</button>
        </div>

      </div>
    </div>
  );
}
