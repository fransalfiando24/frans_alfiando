import React from 'react'
import aboutImage from '../assets/images/about.jpg'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

function AboutSection() {
    return (
        <AboutStyles>
            <div class="about-section">
                <div class="container">
                    <div className="about-text">
                        <p>Let me introduce myself</p>
                        <h1>ABOUT ME</h1>
                        <p>Hi, I'm <b>Fran's Alfiando</b></p>
                        <p><b>Front End Developer</b></p>
                        <p>I am passionate about designing, creating and developing website interface. With an experience in web design and development.</p>
                        <br/><p>Padang, West Sumatera, Indonesia</p>
                        <ButtonStyles>
                            <LinkStyle to='/projects'>Works</LinkStyle>
                            <LinkStyle2 to='/about'>Read More</LinkStyle2>
                        </ButtonStyles>
                    </div>
                    <div className="about-image">
                        <img src={aboutImage} alt=""/>
                    </div>
                </div>
            </div>
        </AboutStyles>
    )
}

const AboutStyles = styled.div`
    .about-section{
        margin-top: 5rem;
        padding: 0 4rem;
        .container{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
    .about-image{
        width: 60%;
        img{
            /* filter: grayscale(1.5); */
            border: 2px solid white;
            opacity: 0.8;
        }
    }

    .about-text{
        width: 100%;
        padding: 2rem;
        margin-right: 2rem;
        h1{
            margin-bottom: 1rem;
            font-size: 2.5rem;
            color: white;
        }
    }

    @media only screen and (max-width: 768px){
        .about-section{
            padding: 0 1rem;
            .container{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column-reverse;
            }
        }
        .about-image{
            margin-bottom: 2rem;
            width: 100%;
        }
        .about-text{
            padding: 0;
            margin: 0;
            text-align: center;
        }

    }
`
const LinkStyle = styled(Link)`
    display: inline-block;
    margin-top: 2rem;
    background: white;
    border: 1px solid var(--white);
    padding: 1rem 2rem;
    border-radius: 5px;
    color: var(--gray-2);
    font-weight: bold;
    transition: .3s ease background-color;
    &:hover{
        background-color: var(--deep-dark);
        border: 1px solid var(--white);
        color: var(--grey-2)
    }
`
const LinkStyle2 = styled(Link)`
    display: inline-block;
    margin-top: 2rem;
    margin-left: 2rem;
    background-color: var(--deep-dark);
    border: 1px solid var(--deep-dark);
    padding: 1rem 2rem;
    border-radius: 5px;
    color: var(--gray-1);
    font-weight: bold;
    transition: .3s ease background-color;
    &:hover{
        background-color: var(--white);
        border: 1px solid var(--white);
        color: var(--gray-2)
    }
    @media only screen and (max-width: 768px){
        margin-left: 0;
        margin-top: 1rem;   
    }
`
const ButtonStyles = styled.div`
    @media only screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export default AboutSection

