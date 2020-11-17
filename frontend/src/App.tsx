import React, {Component} from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {ConfigureStore} from "./store/ConfigureStore";
import {Provider} from "react-redux";
import {default as ContentComponent} from "./components/ContentComponent";
import {BrowserRouter} from "react-router-dom";

const store = ConfigureStore();

export class App extends Component<any, any> {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <BrowserRouter >
                        <Header/>
                        <ContentComponent />
                        <Footer/>
                    </BrowserRouter>
                </Provider>
            </div>
        )
    };
}
