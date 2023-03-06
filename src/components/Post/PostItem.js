
import { useRouter } from "next/router";
import classes from './PostItem.module.scss'

const PostItem = (props) => {

    const router = useRouter();
    
    const showPostDetails = () =>{
        router.push('/' + props.id)
    
    }
	return <div id={props.id} key={props.id} className={classes.postBox}>
		<img src={`${props.image}`} className={classes.img}></img>
		<div className={classes.postText}>
			<h2 className={classes.postTitle}>{props.title} </h2>
			<p className={classes.postDescription}>{props.description} </p>
			<button className={classes.btn} onClick={showPostDetails}>ShowPost</button>
		</div>
	</div>;
};


export default PostItem;