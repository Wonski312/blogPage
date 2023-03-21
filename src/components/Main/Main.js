import PostItem from "../Post/PostItem";
import { useDispatch,useSelector } from "react-redux";
import classes from "./Main.module.scss";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { setUpUser } from "@/store/store";
import { useEffect } from "react";
const Main = (props) => {

	const dispatch = useDispatch()
const auth = getAuth();

// useEffect(() =>{

// 	onAuthStateChanged(auth, user =>{
// 		if (user){
// 			console.log(user)
			
// 			const token = user.accessToken
// 			dispatch(setUpUser(token))
			
// 		}else{
// 			console.log('user sign out');
// 		}
// 	})
// })
const  userDetails = useSelector(state => state.userLoggedIn)
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
