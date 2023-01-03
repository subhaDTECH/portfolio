import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';
import { useSelector, useDispatch } from 'react-redux'
function Skills() {
    const {user} = useSelector((state) => state.User)
    console.log(user)
    const data=user[0].skills;
    console.log(data)
    return (
        <SkillsStyled>
            
                <Title title={'My Skills'} span={'my skills'} />
                <InnerLayout>
                    <div className="skills">
                    {
                        data.map((item,index)=>{
                            return (
                                <ProgressBar
                            key={index} 
                            title={`${item.skill_name}`}
                            width={item.rating+'%'}
                            text={item.rating+'%'}
                        />
                            )
                        })
                    }
                   
                       
                       
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
