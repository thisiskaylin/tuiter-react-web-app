import React from "react";
import post from "./posts.json"
import PostItem from "./post-item";

const PostList = () => {
    return (
        <ul className="list-group">
            {
                post.map(p => {
                    return(
                        <li className="list-group-item">{PostItem(p)}</li>
                    );
                })
            }
        </ul>
    );

};
export default PostList;