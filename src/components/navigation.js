import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import styled from 'styled-components'
import Social from '../components/social'
import Container from '../components/common/container'

const Anchor = styled.a`
    color: #fff;
    border-color: #fff;
    text-decoration: none;
    font-size: 32px;
    width: 100%;
    text-align: left;
    align-self: center;
`

const NavContainer = styled.div`
    display: flex;    
    flex-direction: row;
    justify-content: space-between;
`

const Right = styled.li`
    width: 65%;
    background: rgb(31, 31, 31);
    display: flex;
    align-items: center;
    height: 35%;
    margin: auto;
`

var styles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        left: '30px',
        top: '36px'
    },
    bmBurgerBars: {
        background: '#fff',
        opacity: 1,

    },
    bmCrossButton: {
        height: '24px',
        width: '24px'
    },
    bmCross: {
        background: '#fff'
    },
    bmMenu: {
        width: '100%',
        background: 'rgb(31, 31, 31)',
        fontSize: '1.15em'
    },
    bmMorphShape: {
        fill: '#fff'
    },
    bmItemList: {
        color: '#fff !important',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bmItem: {
        display: 'flex',
        flexWrap: 'wrap',
        alignContent: 'stretch',
    },
    menuItem: {
        width: '100%',
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    }
}

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showNav: false };
    }

    render() {
        return (
            <Container>
                <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
                <main id="page-wrap">
                    <NavContainer>
                        <Menu left styles={styles}  width={'20%'}>
                            <Right>
                                <Anchor id="home" className="menu-item" href="/">Home</Anchor>
                                <Anchor id="home" className="menu-item" href="/">About</Anchor>
                                <Anchor id="home" className="menu-item" href="/">Services</Anchor>
                                <Anchor id="home" className="menu-item" href="/">Contact</Anchor>
                                <Social position={"relative"} left={"0px"} display={"inline-block"} footerFlag={false}/>
                            </Right>
                        </Menu>
                    </NavContainer>
                </main>
            </Container>
        );
    }
}

export default Navigation;
