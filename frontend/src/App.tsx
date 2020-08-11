import React, {Component} from 'react';
import './App.css';
import {Navbar, NavbarBrand} from "reactstrap";
import {Menu} from "./components/Menu";

export class App extends Component<any, any> {

    render() {
        return (
            <div>
                <Navbar dark color={"primary"}>
                    <div className={"container"}>
                        <NavbarBrand href={"/"}>Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu/>
            </div>
        )
    };
}
