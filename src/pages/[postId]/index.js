import { useRouter } from "next/router";
import Post from "../../components/Post/Post";
import Head from "next/head";
function PostPage(props) {
	const router = useRouter();

	function sendLikes(likesCount){

const likes =likesCount;


		 fetch('https://blogpage-crushcode-default-rtdb.europe-west1.firebasedatabase.app/posts/'+props.postData.id+'.json',{
			method: 'PATCH',
			headers:{
				'Content-Type': 'application/json'
			},
			body:JSON.stringify({likes: likes})
		})
	}

	//to samo co link component
	//    router.push('/' + postId);
	return (<>
	<Head>
		<title>{props.postData.title}</title>
		{/* <meta name="description" content={props.meetupData.description}></meta> */}
		<meta name="description" content={props.postData.description}></meta>
	</Head>
	<Post
		title={props.postData.title}
		image={props.postData.image}
		description={props.postData.description}
		id={props.postData.id}
		onAddLike={sendLikes}
		likes={props.postData.likes}></Post>
	</>
	);
}

export async function getStaticPaths() {
	const response = await fetch(
		"https://blogpage-crushcode-default-rtdb.europe-west1.firebasedatabase.app/posts.json"
	);

	const data = await response.json();

	const dataArr = [];

	for (const key in data) {
		dataArr.push({ ...data[key], id: key });
	}

	return {
		fallback: false,
		paths: dataArr.map((post) => ({
			params: {
				postId: post.id.toString(),
			},
		})),

		// paths:[
		// 	{
		// 		params: {
		// 			postId: "01",
		// 		},
		// 	},
		// 	{
		// 		params: {
		// 			postId: "02",
		// 		},
		// 	},
		// ],
	};
}

export async function getStaticProps(context) {
	//fetch data for single post
	const postId = context.params.postId;


	const response = await fetch(
		"https://blogpage-crushcode-default-rtdb.europe-west1.firebasedatabase.app/posts.json"
	);

	const data = await response.json();

	const dataArr = [];

	for (const key in data) {
		dataArr.push({ ...data[key], id: key });
	}

	const selectedPost = dataArr.find((singlePost) => postId === singlePost.id);
console.log(selectedPost);

	// context w static props to object key: properties value: id (to pomiedzy [...] w pliku)

	return {
		props: {
			postData: {
				title: selectedPost.title,
				image: selectedPost.image,
				description: selectedPost.description,
				id: postId,
				likes: selectedPost.likes ? selectedPost.likes = selectedPost.likes : selectedPost.likes = 0
			},
		},
	};
}
export default PostPage;
