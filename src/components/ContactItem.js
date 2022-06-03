import React from 'react'
import {MdPlace} from 'react-icons/md'
import styled from 'styled-components'

function ContactItem({
    icon = <MdPlace/>,
    text = 'this is an info',
}) {
    return (
        <ItemStyles>
            <div className="icon">{icon}</div>
            <div className="info">
                <p>{text}</p>
            </div>
        </ItemStyles>
    )
}

const ItemStyles = styled.div`
    padding : 1rem 1.2rem;
    background-color: var(--deep-dark);
    display: flex;
    align-items: center;
    gap: 2rem;
    border-radius: 8px;
    margin-bottom: 2rem;
    .icon{
        color: var(--white);
        background-color: var(--gray-2);
        padding: 1rem;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }
    svg{
        width: 2rem;
    }
    p{
        font-size: 1rem;
    }
`
export default ContactItem
