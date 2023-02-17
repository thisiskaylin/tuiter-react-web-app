const PostItem = (post) => {

    const cardContentDisplay = (post) => {
        if(post.postHeading ==="") {
            return (`
                <img class="card-img" src=${post.postImage}>
            `)
        }
        return (`
            <img class="card-img-withtext border border-light" src=${post.postImage}>
            <div class="card-body">
                <p class="card-text" style="font-weight bold">${post.postHeading}</p>
                <p class="card-text text-muted">${post.postText}</p>
                <span class="text-mmuted"><i class="fas fa-link"></i> ${post.externalLink}</span>
            </div>
        `)
    };

    return (`
        <div class="list-group-item ms-3 me-3">
            <div class="row pt-3 border border-light"> 
                
                <div class="col-1">
                    <img class="rounded-circle" src=${post.profileImage} height="40px" width="40px">
                </div>
                <div class="col-11">
                    <span>${post.username} <i class="fas fa-check-circle"></i>
                    <small class="text-muted"> @ ${post.userHandle} </small> - ${post.time}</span>
                    <p>${post.postDescription}</p>
                    
                    <div class="card mb-1 border border-light">
                        ${cardContentDisplay(post)}
                    </div>
                    
                    <div class="row text-muted mb-2">
                        <div class="col">
                          <i class="far fa-comment"></i> ${post.comment}
                        </div>
                        <div class="col">
                          <i class="fas fa-retweet"></i> ${post.retweet}
                        </div>
                        <div class="col">
                          <i class="far fa-heart"></i> ${post.like}
                        </div>
                        <div class="col">
                          <i class="fas fa-external-link-alt"></i>
                        </div>
                    </div>
                </div>
                
            </div>
        </div> 
    `);

}
export default PostItem