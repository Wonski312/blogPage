import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import classes from './AuthForm.module.scss';
const AuthForm = (props) => {
	const queryParam = props.query;
	const [isLogin,setIsLogin]=useState()

	useEffect(() =>{
		setIsLogin(queryParam.mode);

	})

	console.log(isLogin);
	return (<div className={classes.main}>

		<form method='POST' action='signUp' className={classes.form}> 
		<h2>{isLogin === "Login" ? 'Log In' : 'Create New User'}</h2>
			<div>
				<div className={classes.input}>
					<label htmlFor='userName'>UserName</label>
					<input type='text' id='userName'></input>
				</div>
				<div className={classes.input}>
					<label htmlFor='password'>Password</label>
					<input type='password' id='password'></input>
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
