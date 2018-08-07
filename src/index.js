import React from 'react'
import {render} from 'react-dom'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import configureStore from './store/configureStore';
import App from './App'
import './styles/app.scss'

let store = configureStore();

render(<App store={store}/>, document.getElementById('app'));
