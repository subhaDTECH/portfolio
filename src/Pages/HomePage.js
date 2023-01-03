import React,{useEffect} from 'react'
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import YoutubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Particle from '../Components/Particle';

function HomePage() {
    useEffect(()=>{
       console.log("suva")
    },[])
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>SUVA DULEY</span></h1>
                <p>
                 I am FULL STACK WEB DEVELOPER and A COMPETITIVE PROGRAMMER .  I am  computer science student  at UNIVERSITY INSTITUTE OF TECHNOLOGY  
                in BURDWAN.
                </p>
                <div className="icons">
                    <a href="https://www.facebook.com/profile.php?id=100060680824744" target="_suva" className="icon i-facebook">
                        <FacebookIcon />
                    </a>
                    <a href="https://github.com/subhaDTECH" target="_blank" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="https://www.instagram.com/subhaduleygba/" className="icon i-youtube">
                        <InstagramIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/suva-duley-741881202/" className="icon i-youtube">
                        <LinkedInIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-linkedin{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;
