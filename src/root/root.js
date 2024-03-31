import React from "react";
import { ThemeProvider } from "styled-components";
import Home from "../pages/homePage";
import { RootWrapper } from "./style"
import Navbar from "../components/navbar/navbar";


const Root =  () => {
    return(
       <React.Fragment>
        <RootWrapper/>
        <Navbar/>

        <Home/>
       </React.Fragment>
    )
}
export default  Root