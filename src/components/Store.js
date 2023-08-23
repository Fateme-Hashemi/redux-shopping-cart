import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Components
import Product from './shared/Product';
import Loader from "./shared/Loader"
// Style
import styles from "./Store.module.css";

//Redux
import {fetchProducts} from "../redux/products/productsAction"
import productsReducer from "../redux/products/productsReducer";

const Store = () => {

  const dispatch = useDispatch();
  const productsState = useSelector(state => state.productsState)
    useEffect(()=> {
       if(!productsState.products.length) dispatch(fetchProducts())
    }, [])


    return (
        <div className={styles.container} >
         {
            productsState.loading ?
            <Loader /> :
            productsState.error ? 
            <h3>something is wrong</h3> :
            productsState.products.map(product => 
                <Product
                key={product.id}
                productData={product}
                 />
                )
         }
        </div>
    );
};

export default Store;