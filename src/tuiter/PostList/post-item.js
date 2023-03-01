import React from "react";

const PostItem = (post) => {

    const displayTitle = (post) => {
        if (post.postHeading === "") {
            return (
                <img className="card-img-top rounded" src={post.postImage} alt="Card image cap"/>
            )
        }
        return ( <>
                <img className="card-img-top rounded" src={post.postImage} alt="Card image cap"/>
                <div className="card-body border border-light">
                    <p className="card-text" style={{fontWeight:'bold'}}>{post.postHeading}</p>
                    <p className="card-text text-muted">{post.postText}</p>
                    <i className="bi bi-link-45deg"></i><a href="#">{post.externalLink}</a>
                </div>
            </>
        )
    }

    return (
        <div className="row align-items-start">
            <div className="col-1">
                <img className="rounded-circle" src={post.profileImage} width="40px" height="40px"/>
            </div>

            <div className="col-11">
                    <span><div>{post.username} <i className="bi bi-check-circle-fill" style={{color:"#2a9fd6"}}></i>
                    <small className="text-muted"> @{post.userHandle}<i className="bi bi-dot"></i>{post.time} </small></div></span>
                <p>{post.postDescription} <a href="#">{post.externalLink}</a></p>

                <div className="card border border-light mb-2" style={{width: "100%"}}>
                    {displayTitle(post)}
                </div>

                <div className="row text-muted">
                    <div className="col">
                        <i className="bi bi-chat-square"></i> {post.comment}
                    </div>
                    <div className="col">
                        <i className="bi bi-arrow-repeat"></i> {post.retweet}
                    </div>
                    <div className="col">
                        <i className="bi bi-heart"></i> {post.like}
                    </div>
                    <div className="col">
                        <i className="bi bi-box-arrow-up-right"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostItem;