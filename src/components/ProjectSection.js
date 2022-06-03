import React from 'react'
import styled from 'styled-components'
import data_projects from '../data/data_projects'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom';

function ProjectSection() {
    return (
        <ProjectStyles>
            <div className="project-section">
                <div className="container">
                    <div className="project-title">
                        <p>Some of my recent Works</p>
                        <h1>PROJECTS</h1>
                    </div>
                    <div className="project-items">
                        <Splide
                            options = {{
                                perPage: 3,
                                perMove: 1,
                                arrows: false,
                                pagination: true,
                                gap: '2rem',
                                autoplay: true,
                                interval: 2500,
                                pauseOnFocus: true,
                                type: 'loop',
                                height: '25rem',
                                breakpoints: {
                                    800: { perPage: 1, gap: '2rem', height: '25rem'},
                                },
                            }}
                        >
                            {data_projects.map((item) => {
                                return (
                                    <SplideSlide>
                                        <Link to={`/projectDetail/${item.id}`}>
                                            <Gradient/>
                                            <div class="project-text">
                                                <h2>{item.name}</h2>
                                                <p>{item.tech}</p>
                                            </div>
                                            <img src={item.img} alt=""/>
                                        </Link>
                                     
                                    </SplideSlide>
                                )
                            })}
                        </Splide>
                    </div>
                    <div className="show-all-projects">
                            <LinkStyles to='/projects'>Show More</LinkStyles>
                    </div>
                </div>
            </div>
        </ProjectStyles>
    )
}

const ProjectStyles = styled.div`
     .project-section{
        margin-top: 10rem;
        padding: 0 4rem;
        text-align: center;
    }

    .project-title{
        width: 100%;
        h1{
            margin-bottom: 2rem;
            font-size: 3.5rem;
            color: white;
        }
    }
    .project-items{
        width: 100%;
        margin-bottom: 4rem;
        .project-text {
            position: absolute;
            z-index: 99;
            left: 50%;
            bottom: 10%;
            transform: translate(-50%, -10%);
            width: 100%;
            text-align: center;
            font-size: 1rem;
            font-weight: 600;
            color: #fff;
            p{
                color: var(--gray-1);
                font-size: .8rem; 
            }
            h2{
                color: #fff;
                font-size: 1.1rem;
            }
        }
        
        img{
            border-radius: 10px;
            /* border: 2px solid #fff; */
            object-fit: cover;
        }

        .detail{
            position: absolute;
            z-index: 99;
            background: #fff;
        }
    }

    .show-all-projects{
        width: 10rem;
        margin: 2rem auto;
    }

    @media only screen and (max-width: 600px){
        .project-section{
            margin-top: 5rem;
            padding: 0 1rem;
        }
        .project-title{
            h1{
                margin-bottom: 2rem;
                font-size: 2.5rem;
            }
        }
        .project-items{
            width: 100%;
            height: 50vh;
        }
    
    }
`
const Gradient = styled.div`
    z-index: 3;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 70%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.85));
    border-radius : 0 0 10px 10px;
`
const LinkStyles = styled(Link)`
    background-color: var(--deep-dark);
    padding: 1rem 2rem;
    border-radius: 8px;
    transition: .3s ease background-color;
    &:hover{
            background-color: var(--white);
            color: var(--black)
    }
`

export default ProjectSection
