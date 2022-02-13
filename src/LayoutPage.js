import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const LayoutPage = (props) => {
    return (
        <>
            <Navbar />
            {props.content}
            <Footer /> 
        </>
    )
}

export default LayoutPage