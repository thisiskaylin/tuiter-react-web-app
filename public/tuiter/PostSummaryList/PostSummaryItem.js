const PostSummaryItem = (post) => {
    return(`
            <li class="list-group-item">
                <div class="row">
                    <div class="col-9 ">
                        <div class="text-secondary">${post.topic}</div>
                        <div class="fw-bolder d-inline-flex">${post.userName}</div>
                        <i class="fas fa-check-circle d-inline-flex ms-1"></i>
                        <div class="text-secondary d-inline-flex"> - ${post.time}</div>
                        <div class="fw-bolder">${post.title}</div>
                    </div>
                    <div class="col-3"><img class="float-end rounded" src="${post.image}" height="100px" width="100pxp"></div>
                </div>
            </li>
    `)
}
export default PostSummaryItem;