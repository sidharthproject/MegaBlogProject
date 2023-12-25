import React,{useEffect,useState} from 'react'
import { Container,PostForm } from '../Components'
import appwriteservice from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'

function EditPosts() {
    const [post,setPosts] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        if(slug){
            appwriteservice.getPost(slug).then((post)=>{
                if(post){
                    setPosts(post)
                }
                else{
                    navigate('/')
                }
                })
        
        }
    },[slug,navigate])
    
  return (
    
    post ?(
        <div>
            <Container>
                <PostForm post ={post} />
            </Container>
        </div>
    ):null
  )
}

export default EditPosts