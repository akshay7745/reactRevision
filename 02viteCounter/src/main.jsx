import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
//! under the hood createRoot working ?
// -> virtual dom is updated using 'fiber' algorithm
// features of Fiber -> ability to pause , abort or reuse work as new updates come in
//The ability to assign priority to different types of updates;
// blog link https://github.com/acdlite/react-fiber-architecture