const Post = (props) =>{
    return (
<div>
    <h1>this is {props.title} post in blog </h1>
    <p><img src={props.image}></img></p>
    <p>{props.description}</p>
</div>
)
}

export default Post;