import React from 'react';
import './App.css';
import { SideBar } from './components/layout/SideBar/SideBar';
import { Grid, GridRow as Row, GridColumn as Column } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      <Grid>

        <Row columns={2}>
         
          <Column style={{background: "orange"}}>
            <SideBar/>
          </Column>

          <Column style={{background: "yellow"}}>
            S
          </Column>


        </Row>

      </Grid>

    </div>
  );
}

export default App;
