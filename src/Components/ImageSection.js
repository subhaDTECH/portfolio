import React from 'react'
import styled from 'styled-components';
import resume from '../img/resume.jpg';
import profileimg from "../img/profilepic.jpeg"
import PrimaryButton from './PrimaryButton';
import './index.css'

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img className='myimg' src={profileimg} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span>SUVA DULEY</span></h4>
                <p className="paragraph">
                I am 20 years old . I am a Full Stack Developer . I am in student at UIVERSITY INSTITUTE OF TECHNOLOGY(UIT BURDWAN). My branch is Computer Science Engineering.My hobbies are playing Cricket,Football,Dance etc.
                    
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: SUVA DULEY </p>
                        <p>: 20</p>
                        <p>: Indian </p>
                        <p>: English, Bengali, Hindi </p>
                        <p>: Garhbeta , paschim Medinipur</p>
                        <p>: Full stack web developer (Mern stack)</p>
                    </div>
                </div>
                <PrimaryButton>
                {/* <a href='../img/profilepic.jpeg' download>
                      Download
                </a> */}
                  <a   title={'Download Cv'} download />
                </PrimaryButton>
               
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
