import React from 'react'
import ReactDom from 'react-dom'
import { ContextProvider } from './context/ContextProvider'

import './index.css'
import App from './App'

ReactDom.render(
    <ContextProvider>
        <App />
    </ContextProvider>,
    document.getElementById('root'));
