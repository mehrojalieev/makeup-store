import { useEffect } from 'react';
import './scss/App.scss';
import { instance } from './api';
import RouteController from './routes/RouteController';
import {connect, useSelector } from 'react-redux';
import { loadProducts } from './redux/actions/product-action';
import Nav from './layout/nav/Nav';

function App(props) {

  const {products_data} = useSelector(state => state.products )

  useEffect(() => {
    props.loadProducts()
  }, [])
  return (
    <div className="App">
      <Nav/>
      <RouteController/>
    </div>
  );
}

export default connect(null, {loadProducts})(App);
