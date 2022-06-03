import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import {MdMenu, MdClose} from 'react-icons/md'

const NavMenuStyles = styled.div`
    position: fixed;
    background: var(--dark-bg);
    padding: 1rem 0;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 999;
    ul{
        max-width: 1200px;
        margin: 0 auto;
        width: 90%;
        text-align: center;
        li{
            display: inline-block;
            border-radius: 8px;
            transition: .3s ease background-color;
            &:hover {
                background-color: var(--deep-dark);
            }
        }
        a{
            display: inline-block;
            font-family: 'RobotoMono Regular';
            padding: 1rem 2rem;
            font-size: 1.2rem;
            color: var(--gray-1);
            outline: none;
        }
        .active{
            color: white;
        }
    }
    .mobile-menu-icons{
        position: absolute;
        right: 2rem;
        top: 2rem;
        width: 2rem;
        cursor: pointer;
        outline: none;
        display: none;
    }

    .close-menu-icons{
        display: none;
    }

    @media only screen and (max-width: 768px){
        padding: 0;
        .hide-item{
            display: none;
        }

        .mobile-menu-icons{
            display: block;
            z-index: -1;
        }

        .navItems{
            transition: 0.3s ease all;
            background-color: var(--deep-dark);
            padding: 1rem;
            width: 90%;
            /* max-width: 300px; */
            border-radius: 5%;
            display: flex;
            flex-direction: column;
            margin-top: 1rem;
            .close-menu-icons{
                display: block;
                width: 2rem;  
                margin: 0 0 0 auto;
                cursor: pointer;
                *{
                    pointer-events: none;
                }
            }
        }
        li{
            display: block;
            margin-bottom: 1rem;
        }
    }
`

function NavMenu() {
    const [showNav, setShowNav] = useState(false);

    return (
        <NavMenuStyles>
            <div className="mobile-menu-icons"
                onClick={() => setShowNav(!showNav)}
                role="button"
                onKeyDown={() => setShowNav(!showNav)}
                tabIndex={0}
            >
                <MdMenu/>
            </div>
            <ul className={!showNav ? 'hide-item' : 'navItems'}>
                <div className="close-menu-icons"
                    onClick={() => setShowNav(!showNav)}
                    role="button"
                    onKeyDown={() => setShowNav(!showNav)}
                    tabIndex={0}
                >
                    <MdClose/>
                </div>
                <li>
                    <NavLink to={'/'} 
                    onClick={() => setShowNav(!showNav)}
                    role="button"
                    onKeyDown={() => setShowNav(!showNav)}
                    tabIndex={0}
                    >
                        Home
                    </NavLink> 
                </li>
                <li>
                    <NavLink to={'/about'}
                    onClick={() => setShowNav(!showNav)}
                    role="button"
                    onKeyDown={() => setShowNav(!showNav)}
                    tabIndex={0}
                    >
                        About
                    </NavLink> 
                </li>
                <li>
                    <NavLink to={'/projects'} 
                    onClick={() => setShowNav(!showNav)}
                    role="button"
                    onKeyDown={() => setShowNav(!showNav)}
                    tabIndex={0}
                    >
                        Projects
                    </NavLink> 
                </li>
                <li>
                    <NavLink to={'/contact'} 
                    onClick={() => setShowNav(!showNav)}
                    role="button"
                    onKeyDown={() => setShowNav(!showNav)}
                    tabIndex={0}
                    >
                        Contact
                    </NavLink> 
                </li> 
            </ul>
        </NavMenuStyles>
    )
}
export default NavMenu
