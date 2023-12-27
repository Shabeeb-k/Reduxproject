import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/productActions';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products); //useSelector takes the current state as an argument, returns the required data...mainly used to access the stored data in redux store
  // const{id,Title,description}=products
  const dispatch = useDispatch();
  // const { id, job, name } = product[0];
  //   console.log('state', id, job, name);

  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((error) => {
        console.error(error);
      });
    // console.log('response', response.data);
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div
        style={{
          marginTop:'10px',
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
        }}
      >
        {products.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`}>
          <Card key={product.id} style={{ width: '18rem', margin: '3rem' }}>
              <Card.Body>
                <Card.Img
                  variant='top'
                  src={product.image}
                  alt={product.title}
                  style={{ height: '18rem' }}
                />
                <div style={{ marginTop: '25px' }}>
                  <Card.Title>{product.title}</Card.Title>
                </div>
                <div>
                 <strong><Card.Text>${product.price}</Card.Text></strong> 
                </div>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductComponent;
