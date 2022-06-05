import React, {useEffect} from 'react'
import { MdCode, MdDesktopMac, MdPhoneAndroid, MdPhoneCallback, MdPhoneIphone, MdPhonelink } from 'react-icons/md'
import { BsClipboardData } from 'react-icons/bs'
import styled from 'styled-components'
import AOS from 'aos';
import "aos/dist/aos.css";

function ServiceSection() {
    useEffect(() => {
        AOS.init({
            once: true,
        })
    })

    return (
        <ServiceStyles>
            <div className="service-section">
                <div className="container">
                    <div className="service-text">
                        <p>What i will do for you</p>
                        <h1>SERVICES</h1>
                    </div>
                    <div className="service-items">
                        <div className="service-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="">
                            <MdDesktopMac/>
                            <h2 className="service-item-title">Web Design</h2>
                            <p>I do ui/ux design for website that helps website to get a beautiful look.</p>
                        </div>
                        <div className="service-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                            <MdCode/>
                            <h2 className="service-item-title">Web Development</h2>
                            <p>I also develop websites. I build a high performance website for a better user experience.</p>
                        </div>
                        <div className="service-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                            <BsClipboardData/>
                            <h2 className="service-item-title">Business Intelligence</h2>
                            <p>I also create a dashboard for business or data analysis using Microsoft Power BI.</p>
                        </div>
                    </div>
                </div>
            </div>
        </ServiceStyles>
    )
}

const ServiceStyles = styled.div`
    .service-section{
        margin-top: 5rem;
        padding: 0 4rem;
        text-align: center;
    }

    .service-text{
        width: 100%;
        h1{
            margin-bottom: 2rem;
            font-size: 3.5rem;
            color: white;
        }
    }

    .service-items{
        display: flex;
        gap: 2rem;
        .service-item{
            flex: 3;
            svg{
                width: 3rem;
                margin: -2rem 0;
            }
            .service-item-title{
                margin-bottom: 1rem; 
            }
        }
    }

    @media only screen and (max-width: 768px){
        .service-text{
        h1{
            margin-bottom: 2rem;
            font-size: 2.5rem;
        }
    }
        .service-items{
            flex-direction: column;

            .service-item{
                svg{
                    width: 2.5rem;
                    margin: 0;
                }
                .service-item-title{
                    margin-bottom: 1rem; 
                }
            }
        }
    }
` 

export default ServiceSection
