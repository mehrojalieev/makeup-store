import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import Loading from './loading/Loading';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
const App = lazy(() => import("./App.jsx"))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Suspense fallback={<Loading/>}>
     <Provider store={store}>
     <App />
     </Provider>
    </Suspense>
  </BrowserRouter>
);

