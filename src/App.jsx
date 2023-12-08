import { useEffect } from 'react';
import './scss/App.scss';
import { instance } from './api';
import RouteController from './routes/RouteController';
import {connect, useSelector } from 'react-redux';
import { loadProducts } from './redux/actions/product-action';

function App(props) {

  const {products_data} = useSelector(state => state.products )
  console.log(products_data);

  useEffect(() => {
    props.loadProducts()
  }, [])
  return (
    <div className="App">
      <RouteController/>
    </div>
  );
}

export default connect(null, {loadProducts})(App);
