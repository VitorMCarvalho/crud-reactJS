import "./App.css";
import React from "react";
import Main from "../components/templates/main/main";
import Footer from "../components/templates/footer/footer";
import Nav from "../components/templates/nav/nav";
import Logo from "../components/templates/logo/logo";


// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <div className="app">
        <Logo/>
        <Nav/>
        <Main/>
        <Footer/>
    </div>
