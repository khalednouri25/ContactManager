import React from 'react';
import './App.css';
import Contact from './ContactManager/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Col, Row} from 'reactstrap';
import {BrowserRouter, Route} from 'react-router-dom'
import AddContact from './AddContact/AddContact'
import GenderDistribution from './GenderDistribution/GenderDistribution'

function App() {
  return (

    <Container>
    <BrowserRouter>
  <div className="App">
    
  <Row className="justify-content-md-center">
      <Col xs='12' s='12' md='6' lg='6'>
      <Route  path='/' exact component={Contact}/>
      <Route   path='/AddNewContact' exact component={AddContact}/>
      <Route path='/GenderDistribution' exact component={GenderDistribution}/> 
      </Col>
    </Row>
    </div>
  </BrowserRouter>
  </Container>
  );
}

export default App;
