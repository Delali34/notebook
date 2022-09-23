import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from 'react';
import { Container,Row,Col } from "react-bootstrap";
import AddNotes from './components/AddNotes';
import SeeAllNotes from './components/SeeAllNotes';
import './myStyles.css'
function App() {

  

  return (
   <>
   <Container>
    <Row>
      <Col className='addNotes'>
      <AddNotes/>
      </Col>
    </Row>

    <Row>
    <Col>
     <SeeAllNotes />
      </Col>
    </Row>
   </Container>
   </>
  );
}

export default App;
