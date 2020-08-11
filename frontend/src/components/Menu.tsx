import React, {Component} from "react";
import {Media} from "reactstrap";
import {DISHES} from "../shared/dishes";

export class MenuProps {
}

class MenuState {
    private readonly _dishes: any[] = [];

    constructor(dishes: any[]) {
        this._dishes = dishes;
    }


    get dishes(): any[] {
        return this._dishes;
    }
}

export class Menu extends Component<MenuProps, MenuState> {

    constructor(props: Readonly<MenuProps>) {
        super(props);
        this.state = new MenuState(DISHES);
    }

    render() {
        const menu = this.state.dishes.map(dish => (
            <div key={dish.id} className={"col-12 mt-5"}><Media tag={"li"}>
                <Media left middle>
                    <Media object src={dish.image} alt={dish.name}/>
                </Media>
                <Media body className={"ml-5"}>
                    <Media heading>{dish.name}</Media>
                    <p>{dish.description}</p>
                </Media>
            </Media></div>
        ));
        return (
            <div className={"container"}>
                <div className={"row"}>
                    <Media list>
                        {menu}
                    </Media>
                </div>
            </div>
        );
    }
}