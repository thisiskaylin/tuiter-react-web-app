import posts from "./posts.js"
import PostItem from "./PostItems.js";

const PostList = () => {
    return (`
        <div class="List-group ">
            ${posts.map(post => {
                return PostItem(post)
            }).join("")}
        </div>
    `)
}
export default PostList