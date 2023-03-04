import PostForm from "@/components/PostForm/PostForm";

const newPost = () =>{

    const sendPostData = (postData) =>{
      fetch('api/hello',{
        method:'POST',
        body: JSON.stringify(postData)
      })
    }
    
    return <PostForm onAddData={sendPostData}/>

}

export default newPost;