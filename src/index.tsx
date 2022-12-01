import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/state';
import {lala} from "./lessons/lesson5/lesson5";
import {jhon} from "./lessons/lesson6/Kobeza";

const sp = jhon
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
