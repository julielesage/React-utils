import React from 'react';
import { ExampleComponent } from './ExampleStyledComponent';
import {Grid, Row, Col} from './GridComponents';

function App() {
  return (
    <div className="App">
      <h1>Responsive Grid with Styled-components</h1>
      <ExampleComponent />
      <Grid>
        <Row>
          <Col size={1}/>
        </Row>
        <Row>
          <Col size={2}/>
          <Col size={1}/>
        </Row>
      </Grid>
    </div>
  );
}

export default App;
