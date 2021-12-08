import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import { HashRouter} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'


ReactDOM.render(<React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,document.getElementById('root')
);
