import "./main.css";
import React from "react";
import Header from "../header/header";
// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <React.Fragment>
        <Header></Header>
        <main className="content">
            Conteudo
        </main>
    </React.Fragment>
    