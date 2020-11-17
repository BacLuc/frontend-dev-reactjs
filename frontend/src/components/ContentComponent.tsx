import React, {Component} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {AppState} from "../store/Reducer";
import {connect, ConnectedProps} from "react-redux";
import {Home} from "../pages/Home";
import {Menu} from "../pages/Menu";
import {compose} from "redux";

const mapState = (state: AppState) => ({dishes: state.dishes})

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>

type ContentProps = PropsFromRedux & {
    dishes: Array<any>
}

class ContentComponent extends Component<ContentProps> {

    render() {
        return (
            <Switch>
                <Route path={"/home"} component={Home}/>
                <Route exact path={"/menu"} component={() => <Menu dishes={this.props.dishes}/>}/>
                <Redirect exact from={"/"} to={"home"}/>
            </Switch>
        );
    }
}

export default compose(connector)(ContentComponent)
