import { useRef } from "react";
import classes from './PostForm.module.scss'
import Paragraph from "./Paragraph";
const PostForm = (props) => {
	const inputTitle = useRef();
	const inputDescription = useRef();
	const inputImage = useRef();

	const addParagraph = () =>{
		return Paragraph
	}
	
	const submitForm = (event) => {
        event.preventDefault();
		const titleData = inputTitle.current.value;
		const DescriptionData = inputDescription.current.value;
		const imageData = inputImage.current.value;

        const postData = { title: titleData, description: DescriptionData, image: imageData }


		props.onAddData(postData)
	};

	return (
		<form onSubmit={submitForm} className={classes.form}>
			<div className={classes.inputbox}>
				<label htmlFor='post-title'>Enter title</label>
				<input ref={inputTitle} id='post-title' type='text' required></input>
			</div>
			<div className={classes.inputbox}>
				<label htmlFor='post-description'> input description</label>
				<textarea
					ref={inputDescription}
					id='post-description'
					type='text'
					required></textarea>
					{}
					<button onClick={addParagraph}>Add paragraph</button>
			</div>
			<div className={classes.inputbox}>
				<label htmlFor='post-image'> input Image</label>
				<input
					ref={inputImage}
					id='post-image'
					type='text'
					required></input>
			</div>
			

            <button className={classes.btn}>submit</button>
		</form>
	);
};

export default PostForm;
