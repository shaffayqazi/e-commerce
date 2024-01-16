// components/ProductList.js
import React from 'react';
import { Card } from 'react-bootstrap';

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <Card key={product.id} style={{ width: '18rem' }}>
          {/* Display other product information */}
          {/* Example: */}
          <Card.Img variant="top" src={product.imageUrl} alt={product.name} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            {/* Add more fields if needed */}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ProductList;
