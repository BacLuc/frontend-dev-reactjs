import React, {Component} from 'react';
import './App.css';
import {Menu} from "./components/Menu";
import {DISHES} from "./shared/dishes";
import {Header} from "./components/Header";

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
                <Header/>
                <Menu dishes={this.state.dishes}/>
            </div>
        )
    };
}
