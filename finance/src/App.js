import React , {Component} from "react";
import {BrowserRouter} from "react-router-dom";
import AllRoutes  from "./allroutes/index.js"
import DashBoard from "./pages/sidebar/dashboard.jsx";


class App extends Component{
  render (){
    return(
      <>
                

       <AllRoutes/>

      </>
       
    )}}
export default App;