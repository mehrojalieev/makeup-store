import { useEffect } from 'react';
import './scss/App.scss';
import { instance } from './api';
import RouteController from './routes/RouteController';

function App() {

  return (
    <div className="App">
      <RouteController/>
    </div>
  );
}

export default App;
