import PostItem from "../Post/PostItem";

import classes from "./Main.module.scss";

const Main = (props) => {
	return (
		<section className={classes.posts}>
			{props.postData.map((post) => {
				return (
					<PostItem
						key={post.id}
						id={post.id}
						title={post.title}
						description={post.description}
						image={post.image}></PostItem>
				);
			})}
		</section>
	);
};

export default Main;
