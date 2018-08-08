import React from 'react'
import {render} from 'react-dom'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faSquare, faCheckSquare} from '@fortawesome/free-regular-svg-icons'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import configureStore from './store/configureStore';
import App from './App'
import './styles/app.scss'

// Add needed FA icons
// Can be used later as
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// <FontAwesomeIcon icon={['far', iconClassName]}/>
library.add(faSquare, faCheckSquare);

// create store
let store = configureStore();

render(<App store={store}/>, document.getElementById('app'));
