import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

function ContactBanner() {
    return (
        <div className="container">
            <ContactBannerStyle>
                <p>Have a project in mind</p>
                <h1>Let me help you</h1>  
                <LinkStyles to='/contact'>Contact Now</LinkStyles>      
            </ContactBannerStyle>
        </div>
    )
}

const ContactBannerStyle = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 5rem;
    padding: 3rem;
    background-color: var(--deep-dark);
    border-radius: 8px;
    h1{
        margin-bottom: 2rem;
        font-size: 3rem;
        color: white;
    }
    @media only screen and (max-width: 600px){
        h1{
            font-size: 2.5rem;
        }
    }
`

const LinkStyles = styled(Link)`
    margin: 3rem;
    background-color: var(--white);
    padding: 1rem 3rem;
    border-radius: 8px;
    color: var(--black);
    transition: .3s ease background-color;
    &:hover{
            background-color: var(--deep-dark);
            border: 2px solid var(--white);
            color: var(--grey-2)
    }
    @media only screen and (max-width: 600px){
        margin: 3rem 0;
    }
`

export default ContactBanner
