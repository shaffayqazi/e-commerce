// App.js
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductForm from "./addProducts/ProductForm";


const App = () => {
  
  return (
    <Container>
      <Row>
        <Col md={6}>
          
          <ProductForm  />
        </Col>
        
      </Row>
    </Container>
  );
};

export default App;
