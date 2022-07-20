import React, {useEffect} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import aboutImg from '../assets/images/aboutImg.jpg'
import ContactBanner from '../components/ContactBanner'
import AboutInfoItems from '../components/AboutInfoItems'
import {FaReact, FaHtml5, FaSass, FaBootstrap, FaJava, FaPython, FaUnity} from 'react-icons/fa'
import {DiJavascript, DiCss3, DiPhp, DiGithubBadge, DiGit, DiVisualstudio} from 'react-icons/di'
import {FiFigma} from 'react-icons/fi'
import {SiAdobephotoshop, SiAdobexd, SiMysql, SiPowerbi, SiStyledcomponents, SiVisualstudiocode} from 'react-icons/si'
import cv_frans from '../assets/data/CV-FRANS_ALFIANDO.pdf'
import AOS from 'aos';
import "aos/dist/aos.css";

function About() {
    useEffect(() => {
        AOS.init({
            once: true,
        })
    })

    return (
        <AboutPageStyles>
            <div className="container">
                <div className="top-section">
                    <div className="left">
                        <img src={aboutImg} alt=""/>
                    </div>
                    <div className="right">
                        <p className="about-subheading" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="">
                            Hi, i am <span>Fran's Alfiando</span>
                        </p>
                        <h2 className="about-heading" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                            Front End Developer
                        </h2>
                        <div className="about-info">
                            <p>I am from Padang, West Sumatera, Indonesia. A place of beauty and nature. 
                               Since my childhood, i love art and design. I always try to design stuff with
                               my unique point of view. I also love to create things that can be useful to others. 
                               <br/><br/>
                               I start coding since i was in college. Coding is also an art for me.
                               I love it and now i have the opportunity to design along with coding.
                               i find it really interesting and i enjoyed the process a lot.
                               <br/><br/>
                               My vision is to make the world a better place. Now almost everything is becoming better than ever.
                               It is time for us to create more good stuff that helps the world to become a better place.
                            </p>
                        </div>
                        <LinkStyles href={cv_frans} target="_blank">Download CV</LinkStyles>
                    </div>
                </div>
                <div className="about-info-section">
                    <div className="about-info-item">
                        <div className="about-info-heading" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="">
                            Education
                        </div>
                        <AboutInfoItems 
                            title="School"
                            items={['SMA Negeri 1 Matur, Agam, West Sumatera.']}
                            desc="Successfully graduated with an average National Exam score of 65.75 and an average School Exam score of 87.00"
                        />
                        <AboutInfoItems 
                            title="College"
                            items={['Universitas Putra Indonesia YPTK Padang.']}
                            desc="Successfully graduated with Cum Laude predicate with a GPA of 3.93"
                        />
                    </div>
                    <div className="about-info-item">
                        <div className="about-info-heading" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="">
                            Skills
                        </div>
                        <div className="skills">
                            <div className="skill-item"><FaHtml5/> HTML</div>
                            <div className="skill-item"><DiCss3/> CSS</div>
                            <div className="skill-item"><DiJavascript/> Javascript</div>
                            <div className="skill-item"><FaReact/> React</div>
                            <div className="skill-item"><FaSass/> SASS</div>
                            <div className="skill-item"><FaBootstrap/> Bootstrap</div>
                            <div className="skill-item"><SiStyledcomponents/> Styled Components</div>
                            <div className="skill-item"><DiPhp/> PHP</div>
                            <div className="skill-item"><b>C</b></div>
                            <div className="skill-item"><b>C#</b></div>
                            <div className="skill-item"><FaJava/> Java</div>
                            <div className="skill-item"><SiMysql/> MySQL</div>
                            <div className="skill-item"><FaPython/> Python</div>
                            <div className="skill-item"><b>DAX</b> Data Analysis Expressions</div>
                        </div>
                    </div>
                    <div className="about-info-item">
                        <div className="about-info-heading" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="">
                            Software
                        </div>
                        <div className="skills">
                            <div className="skill-item"><SiVisualstudiocode/> Visual Studio Code</div>
                            <div className="skill-item"><DiGit/> Git</div>
                            <div className="skill-item"><DiGithubBadge/> Github</div>
                            <div className="skill-item"><SiAdobephotoshop/> Photoshop</div>
                            <div className="skill-item"><SiAdobexd/> Adobe XD</div>
                            <div className="skill-item"><FiFigma/> Figma</div>
                            <div className="skill-item"><FaUnity/> Unity 3D</div>
                            <div className="skill-item"><SiPowerbi/> Microsoft Power BI</div>
                        </div>
                    </div>
                    <div className="about-info-item">
                        <div className="about-info-heading" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="">
                            Experiences
                        </div>
                        <AboutInfoItems 
                            title="April - June 2021"
                            items={['Puskesmas Matur - Internship']}
                            desc="Designing and implementing Artificial Intelligence (Expert System) applications to diagnose gastric diseases."
                        />
                        <AboutInfoItems 
                            title="Sep 2021 - Feb 2022"
                            items={['PT SEMEN PADANG - Internship']}
                            desc="UNIT SISTEM MANAJEMEN - Program Magang Mahasiswa Bersertifikat (PMMB)."
                        />
                    </div>
                    <div className="about-info-item">
                        <div className="about-info-heading" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="">
                            Publication
                        </div>
                        <a href="https://jmi-upiyptk.org/ojs/index.php/jmi/article/view/60" target="_blank">
                        <AboutInfoItems 
                            title="30 June 2021"
                            items={['Sistem Pendukung Keputusan Penentuan Dosen Terfavorit Pilihan Mahasiswa Menggunakan Metode Simple Additive Weighting (SAW)']}
                            desc="Jurnal Majalah Ilmiah UPI YPTK"
                        />
                        </a>
                    </div>
                    <div className="about-info-item">
                        <div className="about-info-heading" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="">
                            Licenses & Certifications
                        </div>
                        <a href="https://www.dicoding.com/certificates/81P2G5028POY" target="_blank">
                        <AboutInfoItems 
                            title="Jul 2022"
                            items={['Belajar Dasar Pemrograman JavaScript']}
                            desc="Dicoding Indonesia"
                        />
                        </a>
                        <a href="https://www.dicoding.com/certificates/07Z6R38WRPQR" target="_blank">
                        <AboutInfoItems 
                            title="Jul 2022"
                            items={['Belajar Dasar Pemrograman Web']}
                            desc="Dicoding Indonesia"
                        />
                        </a>
                        <a href="https://drive.google.com/file/d/12s6FxaVJtiISxbxO9FJxB5bwyblTv6w8/view" target="_blank">
                        <AboutInfoItems 
                            title="Jun 2022"
                            items={['Workshop Membuat Website dengan React JS']}
                            desc="Alterra Academy"
                        />
                        </a>
                        <a href="https://drive.google.com/file/d/10DAFKLouyrYPh-0-eMlhA6H8m_v0kXRv/view" target="_blank">
                        <AboutInfoItems 
                            title="Des 2021"
                            items={['EXCELLENT GRADE in Kickstart Data Science Journey']}
                            desc="Rakamin Academy"
                        />
                        </a>
                        <a href="https://drive.google.com/file/d/1ZrhcssgD6TKwQFobiVW7hGUuINXyPyZx/view" target="_blank">
                        <AboutInfoItems 
                            title="Des 2021"
                            items={['Rakamin Trial Class - Kickstart Data Science Journey']}
                            desc="Rakamin Academy"
                        />
                        </a>
                        <a href="https://drive.google.com/file/d/1hupNQCU79iKZTC8w8wiuwCAxVc3X-1D3/view" target="_blank">
                        <AboutInfoItems 
                            title="Mei 2021"
                            items={['Perluas kehadiran online anda melalui strategi SEO']}
                            desc="Gapura Digital"
                        />
                        </a>
                        <a href="https://drive.google.com/file/d/1TipResM7nqPdKIKPYFw_oJdV1jNTlBhs/view" target="_blank">
                        <AboutInfoItems 
                            title="Jul 2020"
                            items={['Javascript Tutorial course']}
                            desc="Sololearn"
                        />
                        </a>
                        <a href="https://drive.google.com/file/d/1ednICIgjU_2KySkO1HC3x1ng6rd5eetb/view" target="_blank">
                        <AboutInfoItems 
                            title="Nov 2019"
                            items={['SQL Fundamentals course']}
                            desc="Sololearn"
                        />
                        </a>
                        <a href="https://drive.google.com/file/d/1uKkNWH9K1rpnf9M81LLghPbWjSe_TofO/view" target="_blank">
                        <AboutInfoItems 
                            title="Sep 2019"
                            items={['HTML Fundamentals course']}
                            desc="Sololearn"
                        />
                        </a>
                    </div>
                </div>
            </div>
            <ContactBanner/>
        </AboutPageStyles>
    )
}

const AboutPageStyles = styled.div`
    padding: 8rem 0 2rem 0;
    .top-section{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }
    .left{
        flex: 2;
        img{
            border: 2px solid white;
            filter: grayscale(.2);
        }
    }
    .right{
        flex: 3;
    }
    .about-subheading{
        font-size: 1.5rem;
        padding: .5rem 0;
        span{
            background-color: var(--deep-dark);
            padding: 0.2rem;
            border-radius: 5px;
        }
    }
    .about-heading{
        font-size: 2.5rem;
        margin-bottom: 2rem;
    }
    .about-info{
        margin-bottom: 4rem;
        p{
            font-size: 1.1rem;
        }
    }

    .about-info-section{
        margin-top: 10rem;
    }

    .about-info-item{
        margin-bottom: 8rem;
    }

    .about-info-heading{
        font-size: 2.5rem;
        text-transform: uppercase;
    }

    .skills{
        margin-top: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        flex-wrap: wrap;
        .skill-item{
            position: relative;
            padding: 1rem;
            background-color: var(--deep-dark);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .5rem;
            border-radius: 5px;
        }

        svg{
            width: 2rem;
        }
    }

    @media only screen and (max-width: 768px){
        .top-section{
            gap: 2rem;
            flex-direction: column;
        }
        .left{
            img{
                width: 18rem;
            }
        }
        .right{
            text-align: center;
            .about-subheading{
                font-size: 1.2rem;
            }
        }
        .about-info-heading{
            font-size: 2rem;
        }
    }
`

const LinkStyles = styled.a`
    background-color: var(--white);
    padding: 1rem 3rem;
    border-radius: 8px;
    transition: .3s ease background-color;
    color: var(--black);
    &:hover{
            background-color: var(--deep-dark);
            border: 2px solid var(--white);
            color: var(--grey-2)
    }
`

export default About
