import React from "react";

export function Comment(props: { comment: any }) {
    return <div>
        <p>{props.comment.comment}</p>
        <p>{props.comment.author}</p>
        <p>{props.comment.date}</p>
    </div>;
}