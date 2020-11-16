import React, {Component} from "react";
import {Navbar, NavbarBrand} from "reactstrap";

export class Header extends Component {
    render() {
        return <Navbar dark color={"primary"}>
            <div className={"container"}>
                <NavbarBrand href={"/"}>Ristorante Con Fusion</NavbarBrand>
            </div>
        </Navbar>;
    }
}