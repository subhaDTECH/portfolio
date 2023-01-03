import React from 'react';
import styled from 'styled-components';
import {MainLayout, InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import PrimaryButton from '../Components/PrimaryButton';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from '../Components/ContactItem';
import "./style.css"

function ContactPage() {
    const phone = <PhoneIcon />
    const email = <EmailIcon />
    const location = <LocationOnIcon />
    return (
        <MainLayout>
            <Title title={'Contact'} span={'Contact'} />
            <ContactPageStyled >
            <InnerLayout className={'contact-section'}>
            {/* <iframe height={300} width={300} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.803690187451!2d87.32020245066471!3d22.846751328535674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f7eee7f2c99ef7%3A0x8d32db8b7f56dd74!2sRailway%20Station%20Rd%2C%20West%20Bengal%20721121!5e0!3m2!1sen!2sin!4v1647595673420!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
                {/* <div className="left-content">
                    <div className="contact-title">
                        <h4>Get In Touch</h4>
                    </div>
                    <form  className="form">
                        <div className="form-field">
                            <label htmlFor="name"  >Enter your name*</label>
                            <input type="text" id="name" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="email"  >Enter your email*</label>
                            <input type="email" id="email" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="subject"  >Enter your subject</label>
                            <input type="text" id="subject" />
                        </div>
                        <div className="form-field">
                            <label htmlFor="text-area">Enter your Message*</label>
                            <textarea name="textarea" id="textarea" cols="30" rows="10"></textarea>
                        </div>
                        <div className="form-field f-button">
                            <PrimaryButton title={'Send Email'} />
                        </div>
                    </form>
                </div> */}
               
                <div className="right-content">
                    <ContactItem title={'Phone'} icon={phone} cont1={'7076617238'} cont2={'7076617238'} />
                    <ContactItem title={'Email'} icon={email} cont1={'subhaduleygba@gmail.com'} cont2={'subhadulleygba@gmail.com'} />
                    <ContactItem title={'Address'} icon={location} cont1={'BURDWAN , UNIVERSITY INSTITUTE OF TECHNOLOGY '} cont2={'Garhbeta railway station , state -West Bengal  '} />
                    
                </div>
               
     
    
        
            </InnerLayout>
            <div className="map-sect map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14705.747106456567!2d87.34255302931878!3d22.860318210565847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f7ee3d3a9bfaf1%3A0xdf6c830b4d4cfb0e!2sGarhbeta%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1624072227433!5m2!1sen!2sin" width="600" height="450" style={{border:0}}allowfullscreen="" loading="lazy"></iframe> {/* width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0" */}
             </div>
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

export default ContactPage
