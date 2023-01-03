import React,{useEffect,useState} from 'react'
import "./style.css"
import { useParams } from 'react-router-dom'
import Axios from "../axios"
import mycode from "../auth/key"


const Card = () => {


    
    const {id} =useParams();
    const [post,setPost]=useState({
        image:"",
        title:"",
        desc:""
    })
    const getPost=async()=>{
          try{
            const {data}=await Axios.get(`/api/v1/post/${id}`);
            console.log(data)
            setPost(data.data)
           
          }catch(e){
              console.log(e)
          }
    }
    useEffect(()=>{
        getPost();
      
    },[])

    const deletePost=async()=>{
        try{

          
            const code=prompt("Enter the admin code")
            if(code!==mycode){
              alert(" sorry ,You have no permission !!!")
                 return ;
            }
            const data=await Axios.delete(`/api/v1/post/${id}`);
            console.log(data)
            alert("Delete successfully!!")
           
          }catch(e){
              console.log(e)
          }
    }
  return (
    <div className='card__container'>
         <img src={post?.image} alt="" />
          <h3>{post.title}</h3>
          <p>{post.desc}</p>
          <a href={post.linkUrl} target='_blank' className='btn'>View</a>
          <button onClick={deletePost} className='btn'>Delete</button>

    </div>
  )
}

export default Card