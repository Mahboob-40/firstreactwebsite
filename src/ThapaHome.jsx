import React from "react";
import home from "../src/images/home.jpg";
import Common from "./ThapaCommon";

const Home = () =>{
    return(
        <>
        <Common name="Grow your business with" imgsrc={home} visit="/service" btname="Get Started"/>
        </>
    )
}

export default Home;