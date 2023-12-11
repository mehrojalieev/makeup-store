import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import Loading from './loading/Loading';
import { store } from './redux/store/store';
import { apiSlice } from './api/apiSlice';
import { Provider } from 'react-redux';
// import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
const App = lazy(() => import("./App.jsx"))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <Provider store={store}>
        {/* <ApiProvider api={apiSlice}> */}
          <App />
        {/* </ApiProvider> */}
      </Provider>
    </Suspense>
  </BrowserRouter>
);

