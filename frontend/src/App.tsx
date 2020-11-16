import React, {Component} from 'react';
import './App.css';
import {Menu} from "./components/Menu";
import {DISHES} from "./shared/dishes";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import {Home} from "./pages/Home";

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
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route path={"/home"} component={() => <Home/>}/>
                        <Route exact path={"/menu"} component={() => <Menu dishes={this.state.dishes}/>}/>
                        <Redirect exact from={"/"} to={"home"}/>
                    </Switch>
                    <Footer/>
                </BrowserRouter>
            </div>
        )
    };
}
