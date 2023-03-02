import { useRouter } from "next/router";
import Post from "../../components/Post/Post";

function PostPage(props) {
	const router = useRouter();

	//to samo co link component
	//    router.push('/' + postId);
	return (
		<Post
			title={props.postData.title}
			img={props.postData.img}
			description={props.postData.description}
			id={props.postData.id}></Post>
	);
}

export async function getStaticPaths() {
	return {
        fallback: false,
		paths: [
			{
				params: {
					postId: "01",
				},
			},
			{
				params: {
					postId: "02",
				},
			},
		],
	};
}

export async function getStaticProps(context) {
	//fetch data for single post

	// context w static props to object key: properties value: id (to pomiedzy [...] w pliku)
  
	const postId = context.params.postId;
	console.log(postId);
	return {
		props: {
			postData: {
				title: "first blog post from getStatic",
				img: "https://res.cloudinary.com/practicaldev/image/fetch/s--gps5oVPP--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/5ct9nhbw6gdpb8dh0yy1.png",
				description: "first post about development",
				id: postId,
			},
		},
	};
}
export default PostPage;
