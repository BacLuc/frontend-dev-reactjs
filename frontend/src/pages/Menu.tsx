import React, {Component} from "react";
import {Card, CardImg, CardImgOverlay, CardTitle} from "reactstrap";
import {DishDetail} from "../components/DishDetail";

export interface MenuProps {
    dishes: any[];
}

interface MenuState {
    selectedDish: any;
}

export class Menu extends Component<MenuProps, MenuState> {
    public static defaultProps = {
        dishes: [],
    };

    constructor(props: Readonly<MenuProps>) {
        super(props);
        this.state = {
            selectedDish: null,
        };
    }

    render() {
        const menu = this.props.dishes.map((dish) => (
            <div key={dish.id} className={"col-12 col-md-5"}>
                <Card onClick={() => this.selectDish(dish)}>
                    <CardImg width={"100%"} src={dish.image} alt={dish.name}/>
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>
        ));
        return (
            <div className={"container"}>
                <div className={"row"}>{menu}</div>
                <div className={"row"}>
                    <DishDetail dish={this.state.selectedDish}/>
                </div>
            </div>
        );
    }

    private selectDish(dish: any) {
        this.setState({selectedDish: dish});
    }
}