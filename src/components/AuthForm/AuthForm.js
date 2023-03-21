import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import classes from './AuthForm.module.scss';

import signUp from "@/firebase/auth/signup";
import signIn from "@/firebase/auth/signin";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "@/firebase/firebaseConfig";
import { useDispatch } from "react-redux";
import { setUpUser } from "@/store/store";

const AuthForm = (props) => {
const dispatch = useDispatch();
	const auth = getAuth(app)
const router = useRouter()
	// const auth = getAuth()
	
	const queryParam = props.query;
	const [isLogin,setIsLogin]=useState()

	const userName = useRef();
	const password = useRef();

const getUserData = async (event) =>{
event.preventDefault();

const user = userName.current.value;
const userpassword = password.current.value;
console.log(user, userpassword);

if(isLogin === 'Login'){
	const {result, error} = await signIn(user, userpassword)
	if(error){
		return console.log(error);
	}


	onAuthStateChanged(auth, user =>{
		if (user){
			console.log(user)
			
			const token = user.accessToken
			dispatch(setUpUser(token))
			
		}else{
			dispatch(setUpUser(null))
		}
	})

		// onAuthStateChanged(auth, user =>{
		// 	if(user) {
		// 		dispatch(setUpUser(user))
		// 	}else{
		// 		dispatch(setUpUser(null))
		// 	}
		// })
		
			router.push('/')
	return result
	
}else{
	const {result, error} = await signUp(user, userpassword)
	if(error){
		return console.log(error);
	}
	
	router.push('/')
	return result
}


return router.push('/')
// console.log(userData);
}

	useEffect(() =>{
		setIsLogin(queryParam.mode);

	})


// 	createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
	return (<div className={classes.main}>

		<form method='POST' action='signUp' className={classes.form} onSubmit={getUserData}> 
		<h2>{isLogin === "Login" ? 'Log In' : 'Create New User'}</h2>
			<div>
				<div className={classes.input}>
					<label htmlFor='userName'>UserName</label>
					<input ref={userName}type='text' id='userName'></input>
				</div>
				<div className={classes.input}>
					<label htmlFor='password'>Password</label>
					<input ref={password} type='password' id='password'></input>
				</div>
			</div>
			<button className={classes.btn}>Save</button>
			<div className={classes.link}>
			<p>{isLogin === 'Login'? `Don't have an account?`: 'Have an Account? '}</p>
			<Link href={`?mode=${isLogin === 'Login'? 'SignUp': 'Login'}`} >{isLogin === 'Login'? 'SignUp': 'Login'}</Link>
			</div>
		</form>
	</div>
	);
};

export default AuthForm;
