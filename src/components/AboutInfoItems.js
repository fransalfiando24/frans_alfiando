import React from 'react'
import styled from 'styled-components'
import About from '../pages/About'

function AboutInfoItems({
    title = 'this is title',
    items = ['HTML', 'CSS', 'JS'],
    desc = 'this is desc'
}) {
    return (
        <AboutItemsStyles>
            <h1 className="title">{title}</h1>
            <div className="items">
                {items.map((item, index) => (
                    <div className="item" key={index}>
                        <h4>{item}</h4>
                        <p>{desc}</p>
                    </div>
                ))}
            </div>
        </AboutItemsStyles>
    )
}

const AboutItemsStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 2.2rem;
    margin-bottom: 4rem;
    position: relative;
    .title{
        font-size: 1.5rem;
    }
    .items{
        display: flex;
        gap: 2rem;
        padding: 0 2rem;
        position: absolute;
        left: 20rem;
    }
    .item{
        background-color: var(--deep-dark);
        padding: .8rem;
        border-radius: 5px;
        h4{
            font-size:1.2rem;
            margin-bottom: 5px;
        }
    }
    @media only screen and (max-width:768px){
        flex-direction: column;
        gap: 1rem;
        .title{
            font-size: 1.7rem;
        }
        .items{
            position: initial;
        }
    }
`

export default AboutInfoItems
