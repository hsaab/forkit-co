import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
import AlertTemplate from 'react-alert-template-basic'
import { Provider as AlertProvider } from 'react-alert'

const options = {
  position: 'top right',
  timeout: 5000,
  offset: '30px',
  transition: 'scale'
}

class Root extends Component  {
  render () {
    return (
      <AlertProvider template={AlertTemplate} {...options}>
        <App/>
      </AlertProvider>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
