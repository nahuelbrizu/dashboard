import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import { ContextProvider} from "./contexts/contextProvider";


ReactDOM.render(
    <ContextProvider>
    <App/>
    </ContextProvider>,
    document.getElementById('root')
);