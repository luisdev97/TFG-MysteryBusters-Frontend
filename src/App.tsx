import React from "react";
import { SideBar } from "./layouts/layout/SideBar/SideBar";
import { Grid, GridRow as Row, GridColumn as Column } from "semantic-ui-react";
import AppRouter from "./routes/AppRouter";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
      <div >
        <Grid>
          <Row columns={2} style={{marginLeft: 0}}>

            <Column width={3} style={{marginLeft: 0}}>
              <SideBar/>
            </Column>

            <Column width={13} style={{marginLeft: 0}} className="bg-dark">
              <AppRouter/>
            </Column>

          </Row>
        </Grid>
      </div>
  );
}

export default App;
