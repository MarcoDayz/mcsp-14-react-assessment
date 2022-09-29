const PostItems = ({post}) => {
    const handleClick = (e) => {
        console.log(e.target.id)
    }
    
    return <h1 id={post.id} onClick={handleClick}>{post.title}</h1>
}

export default PostItems;