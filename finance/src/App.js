import React from 'react'
// import {BrowserRouter} from "react-router-dom";
import AllRoutes  from "./allroutes/index.js"
// import Dashboard from "./pages/sidebar/dashboard.js"


function App() {
  return (
    <div className='main-page' style={{display: "flex"}}> 
      <AllRoutes />
    </div>  
  )
}

export default App
