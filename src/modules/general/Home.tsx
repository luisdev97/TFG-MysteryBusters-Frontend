import React from 'react'
import { Container, Segment, Button } from 'semantic-ui-react';
import './Home.css'
import { AuthContext } from '../Context/AuthContext';

export default function Home() {
    return (
        <AuthContext.Consumer>
            {({ me }) => (
                <Container className="bg-dark home-container">
                    <div className="st bg-dark">
                        <div className="st-top">
                            <div className="st-bound st-bound-full"></div>
                            <p><span className="st-drop st-stranger-s">M</span><span className="st-stranger-t">y</span><span className="st-stranger-r">s</span><span className="st-stranger-a">t</span><span className="st-stranger-n">e</span><span className="st-stranger-g">r</span><span className="st-stranger-e">y</span>
                            </p>
                            <div className="st-bound st-bound-mini st-bound-left"></div>
                            <div className="st-bound st-bound-mini st-bound-right"></div>
                        </div>

                        <div className="st-bottom">
                            <p><span className="st-things-t">B</span><span className="st-things-i">u</span><span className="st-things-n">s</span><span className="st-things-t">t</span><span className="st-things-x">e</span>  <span className="st-things-x">r</span> <span className="st-things-x">s</span>  </p>
                        </div>

                    </div>
                    <Segment compact className="bg-dark st-text w-50 mx-auto home-container-description">
                        <p>Bienvenidos cibernautas, en Mystery Busters hallaran un lugar donde satisfacer su extraña curiosidad, podrá explorar los sucesos más extraños que jamas haya visto, incluso participar como un investigador activo de nuestra plataforma</p>
                        {!me && <Button fluid className="home-button" content="Unete a la comunidad" />}
                    </Segment>
                </Container>
            )}
        </AuthContext.Consumer>

    )
}
