
// import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
// import remarkGfm from 'remark-gfm'
import { useState } from 'react';
import classes from './Post.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Post = (props) =>{

    const [likes, setLikes] = useState(props.likes)

const addLike = () =>{
   setLikes(likes + 1);

    props.onAddLike(likes+1)
}

    return (
        <>
        <div className={classes.likesBox}>
            <button className={classes.likeBtn} onClick={addLike}><FontAwesomeIcon icon="fas fa-thumbs-up" /> <span>&#9995;{likes}</span></button>
        </div>
<div className={classes.post}>
    <h1 className={classes.title}>{props.title}</h1>
    <img src={props.image}></img>
    <p className={classes.postText}>{props.description}</p>
   
    {/* <ReactMarkdown remarkPlugins={[remarkGfm]} >
        ### hi react Markdown

       - 1
       
       - fgwsda
    </ReactMarkdown> */}
</div>
        
        </>
)
}

async function getStaticProps(context){

}

export default Post;