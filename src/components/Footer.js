import React from 'react'
import styled from 'styled-components'
import FooterCol from './FooterCol'

function Footer() {
    return (
        <FooterStyles>
            <div className="container"> 
                <div className="footer-col-1">
                    <h1 className="footer-col-1-title">
                        Fran's Alfiando
                    </h1>
                    <p>
                        A freelance web designer and developer from Padang, Indonesia.
                        I always make websites that have unique designs and also a good performance rate.
                    </p>
                </div>
                <div className="footer-col-2">
                    <FooterCol heading="Important Links"
                        links={[
                            {
                                title:'Home',
                                path:'/',
                                type:'Link'
                            },
                            {
                                title:'About',
                                path:'/about',
                                type:'Link'
                            },
                            {
                                title:'Projects',
                                path:'/projects',
                                type:'Link'
                            },
                            {
                                title:'Contact',
                                path:'/contact',
                                type:'Link'
                            },

                        ]}
                    />
                </div>
                <div className="footer-col-3">
                    <FooterCol heading='Contact Info'
                        links={[
                            {
                                title: '+6282169738862',
                                path: 'tel:+6282169738862'
                            },
                            {
                                title: 'fransalfiando@gmail.com',
                                // path: 'mailto:fransalfiando@gmail.com'
                                path: 'https://mail.google.com/mail/?view=cm&fs=1&to=fransalfiando@gmail.com'
                            },
                            {
                                title: 'Padang, West Sumatera, Indonesia',
                                path: 'http://google.com/maps'
                            },
                        ]}
                    />
                </div>
                <div className="footer-col-4">
                    <FooterCol heading='Social Links'
                        links={[
                            {
                                title:'Instagram',
                                path: 'http://instagram.com'
                            },
                            {
                                title:'Facebook',
                                path: 'http://facebook.com'
                            },
                            {
                                title:'LinkedIn',
                                path: 'https://www.linkedin.com/in/frans-alfiando/'
                            },
                            {
                                title:'Github',
                                path: 'https://github.com/fransalfiando24/'
                            },
                        ]}
                    />
                </div>
            </div>
            <div className='copyright'>
                <div className='container'>
                    <p>&copy; 2022 - Fran's Alfiando</p>
                </div>
            </div>
        </FooterStyles>
    )
}

const FooterStyles = styled.div`
    margin-top: 5rem;
    padding-top: 3rem;
    background-color: var(--deep-dark);
    .container{
        display: flex;
        gap: 3rem;
    }
    .footer-col-1{
        flex:2;
    }
    .footer-col-2,
    .footer-col-3,
    .footer-col-4{
        flex:1;
    }
    .footer-col-1-title{
        font-size: 3.5rem;
        margin-bottom: 1rem;
    }
    .copyright{
        background-color: var(--dark-bg);
        text-align: left;
        padding: 1rem 0;
        margin-top: 3rem;
        font-size: .9rem;
    }

    @media only screen and (max-width: 768px){
        .container{
            flex-direction: column;
            gap: 0rem;
            & > div{
                margin-top: 2rem;
            }
        }
        .footer-col-1 p {
            max-width: 100%;
        }
        .copyright{
            padding: 0;
        }
    }
`

export default Footer
