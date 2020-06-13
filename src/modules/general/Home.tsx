import React from 'react'
import { Container, Header } from 'semantic-ui-react';
import './Home.css'

export default function Home() {
    return (
        <Container text classNameName="home-container w-100">
            <div className="home-container bg-dark">
                <div className="home-container-top">
                    <div className="home-container-bound home-container-bound-full"></div>
                    <p><span className="home-container-drop home-container-home-containerranger-s">M</span><span className="home-container-home-containerranger-t">y</span><span className="home-container-home-containerranger-r">s</span><span className="home-container-home-containerranger-a">t</span><span className="home-container-home-containerranger-n">e</span><span className="home-container-home-containerranger-g">r</span><span className="home-container-home-containerranger-e">y</span>
                    </p>
                    <div className="home-container-bound home-container-bound-mini home-container-bound-left"></div>
                    <div className="home-container-bound home-container-bound-mini home-container-bound-right"></div>
                </div>

                <div className="home-container-bottom">
                    <p><span className="home-container-things-t">B</span><span className="home-container-things-h">h</span><span className="home-container-things-i">u</span><span className="home-container-things-n">s</span><span className="home-container-things-t">t</span><span className="home-container-things-x">e</span>  <span className="home-container-things-x">r</span> <span className="home-container-things-x">s</span>  </p>
                </div>

            </div>
        </Container>
    )
}
