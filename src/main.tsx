
import React from 'react';
import ReactDom from 'react-dom';
import 'antd-mobile/dist/antd-mobile.css';
import App from './App';
import './style.less';

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  , document.getElementById('app'));