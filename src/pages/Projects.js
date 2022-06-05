import React, {useEffect} from 'react'
import styled from 'styled-components'
import data_projects from '../data/data_projects'
import {Link} from 'react-router-dom'
import AOS from 'aos';
import "aos/dist/aos.css";

function Projects() {
    useEffect(() => {
        AOS.init({
            once: true,
        })
    })

    return (
        <ProjectPageStyles>
            <div className="container">
                <div className="project-title">
                    <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="">Some of my recent Works</p>
                    <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">PROJECTS</h1>
                </div>
                <div className="project-items">
                    {data_projects.map((item, index) => (
                        <div className="project-item" key={index}>
                            <img src={item.img} alt=""/>
                            <div className="project-item-detail">
                                <h3>{item.name}</h3>
                                <p>{item.tech}</p>
                                <div className="project-item-btn">
                                    <Link to={`/projectDetail/${item.id}`}>Detail</Link>
                                    { item.link !== '' ? <a href={item.link} target="_blank">Preview</a> : ''}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </ProjectPageStyles>
    )
}

const ProjectPageStyles = styled.div`
    padding: 8rem 0 2rem 0;
    
    .project-title{
        width: 100%;
        text-align: center;
        h1{
            margin-bottom: 2rem;
            font-size: 3rem;
            color: white;
        }
    }

    .project-items{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 5rem;
        margin-top: 5rem;
        .project-item{
            margin: 1rem 0;
            img{
                border-radius: 8px;
                height: 90%;
                transition: .3s ease transform;
                object-fit: cover;
                &:hover{
                    transform: scale(1.01);
                }
            }
            .project-item-detail{
                padding: 1rem;
                margin-top: 1rem; 
                background-color: var(--deep-dark);
                border-radius: 8px;
                text-align: center;
                h3{
                    font-size:1rem;
                }
                p{
                    font-size:.8rem;
                }
                .project-item-btn{
                    margin-top: .8rem;
                    a{
                        /* background-color: var(--white); */
                        color: var(--gray-2);
                        padding: .3rem;
                        margin: .3rem;
                        border-radius: 3px;
                        font-size: .9rem;
                        transition: .3s ease color;
                        &:hover{
                            color: var(--gray-1);
                        }
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 768px){
        .project-items{
            gap: 8rem;
        }
    }
`

export default Projects
