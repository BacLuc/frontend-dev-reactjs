import React, {Component} from 'react';
import './App.css';
import {Navbar, NavbarBrand} from "reactstrap";
import {Menu} from "./components/Menu";
import {DISHES} from "./shared/dishes";

export class App extends Component<any, any> {

    constructor(props: Readonly<any>) {
        super(props);
        this.state = {
            dishes: DISHES
        }
    }

    render() {
        return (
            <div>
                <Navbar dark color={"primary"}>
                    <div className={"container"}>
                        <NavbarBrand href={"/"}>Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes}/>
            </div>
        )
    };
}
