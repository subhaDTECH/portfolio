import React,{useState,useEffect} from 'react';
import PrimaryButton from '../Components/PrimaryButton';
// import { MainLayout} from '../styles/Layouts';
import {MainLayout, InnerLayout} from '../styles/Layouts';
import styled from 'styled-components';
import Axios from ".././axios.js"
import { useSelector, useDispatch } from 'react-redux'
import {LoadPostRequest,LoadPostSuccess,LoadPostFail} from ".././Reducers/Post"
import { getAllPost } from "../Reducers/Post"
import Loader from "../Components/Loader"
import Title from '../Components/Title';
import mycode from "../auth/key"
import { useHistory } from 'react-router-dom';





   const  Dashboard=()=>{
   const history=useHistory()
    const posts = useSelector((state) => state.Post)
  
    const dispatch = useDispatch()
     
    const [post,setPost]=useState({
        image:"",
        title:"",
        desc:"",
        linkUrl:""

    });
 
   
    const getAllPost=async()=>{
        try{
            dispatch(LoadPostRequest())
            const {data}=await Axios.get('/api/v1/posts');
            const res=data.data;
            console.log(res)
            dispatch(LoadPostSuccess(res));

        }catch(e){
           console.log(e)
        }
      
    }
    useEffect(()=>{
           getAllPost();
           const code=prompt("Enter admin code ")
           if(code!==mycode){
             alert(" sorry ,You have no permission !!!")
             history.push('/')   
           }
    },[])

   
   const  FromSubmit=async(e)=>{

    try{
        e.preventDefault();
       

        const {data}=await Axios.post('/api/v1/new/post',
        {image:post.image,title:post.title,desc:post.desc,linkUrl:post.linkUrl},{
            headers:{
                "Content-Type":"application/json"
            }
        })
        console.log(data)
      
        setPost({ image:"",
        title:"",
        desc:"",
        linkUrl:""
    })
    getAllPost();

  
    
    }catch(e){
        console.log(e)
    }
     
   }

       
    const handleFormPost=(e)=>{
        setPost({...post,[e.target.name]:e.target.value})
      }



  if(posts.loading){
      return <Loader/>
  }

    return (
        <MainLayout>
         <ContactPageStyled>
         <Title title={'Dashboard'} span={'Dashboard'} />
            <InnerLayout className={'contact-section'}>
        <div>
            <form  className="form" onSubmit={FromSubmit}>
                        <div className="form-field">
                            <label htmlFor="name"  >Enter Image ULR*</label>
                            <input
                            onChange={handleFormPost}
                             name="image"
                             type="text" id="text" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="linkUrl"  >Enter post Link*</label>
                            <input
                            onChange={handleFormPost}
                             name="linkUrl"
                             type="text" id="linkUrl" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="title"  >Write title*</label>
                            <input 
                            onChange={handleFormPost}
                            name="title"
                            type="text" id="title" />
                        </div>
                       
                        <div className="form-field">
                            <label htmlFor="text-area">Write Description..*</label>
                            <textarea
                             onChange={handleFormPost}
                             name="desc" id="textarea" cols="30" rows="10"></textarea>
                        </div>
                        <div className="form-field f-button">
                           <button type='submit' className='submitbtn'>
                               submit
                           </button>
                        </div>
                    </form>
                </div>
                </InnerLayout>
                </ContactPageStyled>
           
        </MainLayout>
    )
}


const ContactPageStyled = styled.section`
    .contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;
        @media screen and (max-width: 978px){
            grid-template-columns: repeat(1, 1fr);
            .f-button{
                margin-bottom: 3rem;
            }
        }
        .right-content{
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            @media screen and (max-width: 502px){
                width: 50%;
            }
        }
        .contact-title{
            h4{
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }
        .form{
            width: 100%;
            @media screen and (max-width: 502px){
                width: 100%;
            }
            .form-field{
                margin-top: 2rem;
                position: relative;
                width: 100%;
                label{
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding:0 .5rem;
                    color: inherit;
                }
                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding:0 15px;
                    width: 100%;
                    color: inherit;
                }
                textarea{
                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;
                }
            }

            
        }
    }
`;


export default Dashboard;