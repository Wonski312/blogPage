import PostForm from "@/components/PostForm/PostForm";
import { useRouter } from "next/router";

const newPost = () =>{
const router = useRouter()
    const sendPostData = (postData) =>{
      fetch('api/hello',{
        method:'POST',
        body: JSON.stringify(postData)
      })

router.push('/')
    }
    
    return <PostForm onAddData={sendPostData}/>

}

export default newPost;