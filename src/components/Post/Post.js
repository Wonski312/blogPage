
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm'
import classes from './Post.module.scss'

const Post = (props) =>{
    return (
<div className={classes.post}>
    <h1 className={classes.title}>{props.title}</h1>
    <img src={props.image}></img>
    <p className={classes.postText}>{props.description}</p>
    <ReactMarkdown remarkPlugins={[remarkGfm]} >
        ### hi react Markdown

       - 1
       
       - fgwsda
    </ReactMarkdown>
</div>
)
}

export default Post;