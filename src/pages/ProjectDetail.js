import React from 'react'
import data_projects from '../data/data_projects'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

function ProjectDetail() {
    const {id} = useParams();
    // console.log(id)
    return (
        <ProjectDetailStyles>
            <div className="container">
                {data_projects
                    .filter((item) => item.id == id)
                    .map((item, index) =>  (
                    <div key={index} className="project">
                        <div className="project-image">
                            {!item.preview.length ? 
                                /* if preview array is empty */
                                <img src={item.img} alt=""/>
                                :
                                /* if preview array is not empty */
                                <Splide
                                    options={{
                                        height: '100%',
                                        gap: '1rem',
                                        autoplay: true,
                                        interval: 2000,
                                        type: 'loop',
                                        arrows: false
                                    }}
                                >
                                    {item.preview.map((prevImg) => (
                                        <SplideSlide>
                                            <img src={prevImg} alt=""/>    
                                        </SplideSlide>
                                    ))}
                                </Splide>   
                            }
                        </div>
                        <div className="project-detail">
                            <h4><i>{item.tech}</i></h4>
                            <h1>{item.name}</h1>
                            <p>{item.desc}</p>
                            <div className="project-btn">
                                {/* <a href={item.source} target="_blank">Source Code</a> */}
                                { item.source !== '' ? <a href={item.source} target="_blank">Source Code</a> : ''}
                                { item.link !== '' ? <a href={item.link} target="_blank">Preview</a> : ''}
                            </div>
                        </div>
                    </div>
                ))}
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
                                    {data_projects
                                    .filter((project) => project.id != id)
                                    .map((project, index) => {
                                        return (
                                            <SplideSlide key={index}>
                                                <Link to={`/projectDetail/${project.id}`}>
                                                    <Gradient/>
                                                    <div className="project-text">
                                                        <h2>{project.name}</h2>
                                                        <p>{project.tech}</p>
                                                    </div>
                                                    <img src={project.img} alt=""/>
                                                </Link>
                                            </SplideSlide>
                                        )
                                    })}
                                </Splide>
                            </div>
                        </div>
                    </div>
                </ProjectStyles>
            </div>
        </ProjectDetailStyles>
    )
}

const ProjectDetailStyles = styled.div`
    margin: 10rem 0;
    .project{
        display: flex;
        justify-content: center;
        /* align-items: center; */
        gap: 2rem;
        .project-image{
            flex: 5;
            img{
                border-radius: 8px;
                object-fit: cover;
            }
        }
        .project-detail{
            flex: 3;
            padding: 1rem;
            height: 100%;
            background-color: var(--deep-dark);
            border-radius: 8px;
            h4{
                margin: .6rem 0;
            }
            h1{
                font-size: 2.5rem;
            }
            p{
                margin: 1rem 0;
                text-align: justify;
            }
            .project-btn{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                gap: 1.5rem;
                margin: 1rem 0;
                a{
                    /* background-color: var(--white); */
                    color: var(--gray-2);
                    /* margin: 2rem 0; */
                    font-size: .9rem;
                    transition: .3s ease color;
                    &:hover{
                        color: var(--gray-1);
                    }
                }
            }   
        }
    @media only screen and (max-width:768px){
        flex-direction: column-reverse;
        margin: -5rem 0;
        .project-image{
            flex: 4;
            img{
                transform: scale(1.05);
            }
        }
    }
}
`
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

    @media only screen and (max-width: 600px){
        .project-section{
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

export default ProjectDetail
