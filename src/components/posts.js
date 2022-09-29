import PostItems from "./postItems"

const Posts = ({posts}) => {
    return posts.map(post => (
        <PostItems post={post} key ={post.id}/>
    ))
}

export default Posts;