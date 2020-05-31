import React from "react";

export default function OverlayForm({ setMode } : any) {
  return (

      
        <div className="overlay-wrapper">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" id="signIn" onClick={() => setMode()}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" id="signUp" onClick={() => setMode()}>
                Sign Up
              </button>
            </div>
          </div>
        </div>

      
  );
}
