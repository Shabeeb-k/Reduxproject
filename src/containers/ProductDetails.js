import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeSelectedProduct, selectedProduct } from '../redux/actions/productActions';
const ProductDetails = () => {
  const { productId } = useParams();
  // console.log('para', productId);
  const product = useSelector((state) => state.selectedProductItem); //selectedProductItem** this name is refered  index.js file in the reducer folder as a key...that means we access the product as the name of  selectedProductItem and both name should same in the  index.js and productDetails.js
  // console.log('helo', product);
  const { title, price, description, image } = product;
  const dispatch = useDispatch();
  const fetchProductDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((error) => {
        console.error(error);
      });
    // console.log('res', response.data);
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== '') {
      fetchProductDetails();
      return ()=>{
        dispatch(removeSelectedProduct());
      }
    }
  }, [productId]);
  return (
    <div>
      <h2>ProductDetails</h2>
      {Object.keys(product).length === 0 ? (
        <p>loading</p>
      ) : (
        <div>
          <div class='ui two column grid mt-5'>
            <div class='column'>
              <h1 class='ui header'>{title}</h1>
            </div>
            <div class='ui large image ui two column grid'>
              <img src={image} alt={image} />
            </div>
            <div class='content'>
              <div class='sub header'>{description}</div>
            </div>
            <div class='ui tag labels medium'>
              <a class='ui label'>${price}</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductDetails;
