import React, {useEffect} from 'react'
import heroImage from '../assets/images/hero-image.jpg'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {FaFacebook, FaFacebookF, FaGithub, FaGithubAlt, FaInstagram, FaLinkedin, FaLinkedinIn} from 'react-icons/fa'
import AOS from 'aos';
import "aos/dist/aos.css";


function HeroSection() {
    useEffect(() => {
        AOS.init({
            once: true,
        });
    })
    return (
        <HeroStyles>
            <div className="hero">
                <div className="container">
                    <div className="hero-heading">
                        <p data-aos="fade-down" data-aos-duration="1000">Hello, I'm</p>
                        <h1 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="100">Fran's Alfiando</h1>
                    </div>
                    <div className="hero-image">
                        <img src={heroImage} alt=""/>
                    </div>
                    <div className="hero-text">
                        <p>I'm a Front End Developer. I love to design and make new web experience for the people.</p>
                        <LinkStyle to='/projects'>See My Works</LinkStyle>
                    </div>
                    <div className='hero-contact'>
                        <a href="" data-aos="fade-left" data-aos-duration="1000"><FaInstagram/></a>
                        <a href="" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100" className='mt-100'><FaFacebookF/></a>
                        <a href="https://www.linkedin.com/in/frans-alfiando/" target="_blank" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200"><FaLinkedinIn/></a>
                        <a href="https://github.com/fransalfiando24/" target="_blank" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300"><FaGithub/></a>
                    </div>
                </div>
            </div>
        </HeroStyles>
    )
}

const HeroStyles = styled.div`
    .hero{
        margin-top: 5rem;
        height: 100vh;
        width: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: relative;
        .container{
            width: 100%;
            display: flex;
            flex-direction: column;
        }
    }
    .hero-heading{
        margin-bottom: -2rem;
        position: relative;
        p{
            color: var(--gray-1);
            font-size: 1.2rem;
        }
        h1{
            color: white;
            font-size: 4rem;
        }
    }
    .hero-image{
        z-index: -1;
        img{
            width: 65%;
            height: 80%;
            border: 2px solid white;
            opacity: 0.8;
        }
    }
    .hero-text{
        margin-top: -12rem;
        position: relative;
        text-align: center;
        p{
            width: 40%;
            margin: 0 auto;
        }
    }

    .hero-contact{
        position: absolute;
        right: 15%;
        top: 40%;
        transform: translate(40%, -15%);
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
        svg{
            width: 1.3rem;
            transition: .3s ease transform;
            &:hover{
                transform: scale(1.05);
            }
        }
    }

    @media only screen and (max-width: 768px){
        .hero{
            margin-top: 5rem;
        }
        .hero-heading{
            margin-bottom: -2rem;
            position: relative;
            p{
                color: var(--gray-1);
                font-size: 1rem;
            }
            h1{
                color: white;
                font-size: 4rem;
            }
        }
        .hero-image{
            img{
                width: 90%;
                height: 60vh;
            }
        }
        .hero-text{
            margin-top: 0rem;
            p{
                width: 70%;
            }
            a{
                margin-top: 2rem;
            }
        }
    }
`

const LinkStyle = styled(Link)`
    display: inline-block;
    margin-top: 3rem;
    background-color: white;
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

export default HeroSection
