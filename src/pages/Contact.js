import React from 'react'
import styled from 'styled-components'
import ContactItem from '../components/ContactItem'
import {MdLocalPhone, MdMail, MdPlace} from 'react-icons/md'
import ContactForm from '../components/ContactForm'
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react'

function Contact() {
    useEffect(() => {
        AOS.init({
            once: true,
        })
    })
    return (
        <ContactStyles>
            <div className="container">
                <div className="contact-title">
                    <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="">get in touch</p>
                    <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">CONTACT</h1>
                </div>
                <div className="contact-wrapper">
                    <div className="contact-left">
                        <ContactItem icon={<MdLocalPhone/>} text="+6282169738862"/>
                        <ContactItem icon={<MdMail/>} text="fransalfiando@gmail.com"/>
                        <ContactItem icon={<MdPlace/>} text="Padang, West Sumatera, Indonesia"/>
                    </div>
                    <div className="contact-right">
                        <ContactForm/>
                    </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1459.382093552618!2d100.40936937232097!3d-0.9579759489096593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd4b920b554471d%3A0x588d611364907e4!2sPerumahan%20mulia%20asri!5e0!3m2!1sid!2ssg!4v1651300862493!5m2!1sid!2ssg" width="100%" height="450" style={{border:0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </ContactStyles>
    )
}

const ContactStyles = styled.div`
    padding: 8rem 0 2rem 0;
    .contact-title{
        width: 100%;
        text-align: center;
        h1{
            margin-bottom: 2rem;
            font-size: 3rem;
            color: white;
        }
    }
    .contact-wrapper{
        display: flex;
        gap: 5rem;
        justify-content: center;
        position: relative;
        flex-direction: row-reverse;
        @media only screen and (max-width: 768px){
            flex-direction: column;
        }
    }
    iframe{
        margin-top: 5rem;
        width: 100%;
        border-radius: 5px;
        opacity : 0.7~;
    }
`

export default Contact
