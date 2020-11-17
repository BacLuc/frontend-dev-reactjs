import React, {Component} from "react";
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavLink} from "reactstrap";
import {NavLink as RRNavLink} from "react-router-dom";

interface HeaderState {
    isNavOpen: boolean
}


export class Header extends Component<any, HeaderState> {
    public readonly state: Readonly<HeaderState> = {isNavOpen: false}


    constructor(props: Readonly<any>) {
        super(props);
        this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({isNavOpen: !this.state.isNavOpen})
    }

    render() {
        return (
            <div>
                <Navbar dark expand={"md"}>
                    <NavbarToggler onClick={_ => this.toggleNav()}/>
                    <NavbarBrand className={"mr-auto"} href="/"><img src={"assets/images/logo.png"} height="30"
                                                                     width="41"
                                                                     alt='Ristorante Con Fusion'/></NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavLink to={"/home"} tag={RRNavLink}>Home</NavLink>
                            <NavLink to={"/menu"} tag={RRNavLink}>Menu</NavLink>
                            <NavLink to={"/contact"} tag={RRNavLink}>Contact</NavLink>
                        </Nav>

                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
