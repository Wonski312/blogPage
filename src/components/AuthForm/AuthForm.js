import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const AuthForm = (props) => {
	const queryParam = props.query;
	const [isLogin,setIsLogin]=useState()

	useEffect(() =>{
		setIsLogin(queryParam.mode);

	})

	console.log(isLogin);
	return (
		<form method='POST' action='signUp'> 
		<h2>{isLogin === "Login" ? 'Log In' : 'Create New User'}</h2>
			<div>
				<div>
					<label htmlFor='userName'>UserName</label>
					<input type='text' id='userName'></input>
				</div>
				<div>
					<label htmlFor='password'>Password</label>
					<input type='password' id='password'></input>
				</div>
			</div>
			<Link href='/'></Link>
			<button>Save</button>
		</form>
	);
};

export default AuthForm;
