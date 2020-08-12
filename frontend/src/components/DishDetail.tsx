import {Card, CardImg, CardText, CardTitle} from "reactstrap";
import React from "react";
import {Comment, Header} from 'semantic-ui-react';

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
                <Comment.Group className={"col-12 col-md-5"}>
                    <Header as={"h1"} dividing>
                        Comments
                    </Header>
                    {props.dish.comments.map((comment: any) => (
                        <Comment key={comment.id}>
                            <Comment.Content>
                                <Comment.Author>{comment.author}</Comment.Author>
                                <Comment.Metadata>
                                    <div>{comment.date}</div>
                                </Comment.Metadata>
                                <Comment.Text>{comment.comment}</Comment.Text>
                            </Comment.Content>
                        </Comment>
                    ))}
                </Comment.Group>
            </div>
        </div>
    );
}