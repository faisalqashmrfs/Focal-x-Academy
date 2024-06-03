import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter basename='/Focal_x_app'>
      <App />
    </BrowserRouter>
  </React.StrictMode>

)

// "react-slick": "^0.30.1",
// "slick-carousel": "^1.8.1",