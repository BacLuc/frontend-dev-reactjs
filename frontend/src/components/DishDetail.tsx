import {Card, CardImg, CardText, CardTitle} from "reactstrap";
import React from "react";
import { Comment } from "./Comment";

export function DishDetail(props: { dish: any }) {
    if (!props.dish) {
        return (<div/>);
    }
    let styles = {
        marginTop: 5
    };

    // @ts-ignore
    return (
        <div className={"col-12"} style={styles}>
            <div className={"row"}>
                <Card className={"col-12 col-md-5"}>
                    <CardImg width={"100%"} src={props.dish.image} alt={props.dish.name}/>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>{props.dish.description}</CardText>
                </Card>
                <div className={"col-12 col-md-5"}>
                    <h1>Comments</h1>
                    {props.dish.comments.map((comment: any) => (
                        <Comment key={comment.id} comment={comment}/>
                    ))}
                </div>
            </div>
        </div>
    );
}