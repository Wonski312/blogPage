function SignUp(props) {
	return (
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
	);
}
export default SignUp;