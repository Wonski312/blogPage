import { useRef } from "react";

const PostForm = (props) => {
	const inputTitle = useRef();
	const inputDescription = useRef();

	const submitForm = (event) => {
        event.preventDefault();
		const titleData = inputTitle.current.value;
		const DescriptionData = inputDescription.current.value;


        const postData = { title: titleData, description: DescriptionData }


		props.onAddData(postData)
	};

	return (
		<form onSubmit={submitForm}>
			<div>
				<label htmlFor='post-title'>input title</label>
				<input ref={inputTitle} id='post-title' type='text' required></input>
			</div>
			<div>
				<label htmlFor='post-description'> input description</label>
				<input
					ref={inputDescription}
					id='post-description'
					type='text'
					required></input>
			</div>

            <button >submit</button>
		</form>
	);
};

export default PostForm;