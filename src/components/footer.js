import React from 'react'
import styled from 'styled-components'
import Particles from '../components/particles'
import Container from '../components/common/container'
import Social from '../components/social'

const FooterContainer = Container.extend`
    position: block;
    bottom: 0;
    background-color: #000;
    border-bottom: 4px solid #00b4d9;
    padding: 60px 0 14px;
    margin-bottom: 0;
`

const ContainerBoot = styled.div`
    width: 80%;
    margin: 0 auto;
`

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const ContactUsParagraph = styled.p`
    color: ${props => props.color ? "#9a9a9a" : "#fff"};
    float: right;
    clear: both;
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
`

const ContactUsContainer = styled.div`
    flex: 0 0 60%;
    max-width: 60%;

    & > p:first-child {
        padding-bottom: 10px;
    }
`

const Footer = () => {
    return (
        <FooterContainer>
            <Particles height={"10vh"} />
            <ContainerBoot>
                <Row>
                    <Social position={"relative"} left={"12%"} display={"inline-block"} footerFlag={true} />
                    <ContactUsContainer>
                        <ContactUsParagraph fontSize={"28px"}>Get in touch</ContactUsParagraph>
                        <ContactUsParagraph color fontSize={"20px"} fontWeight={"200"}>hello@mstas.in</ContactUsParagraph>
                    </ContactUsContainer>
                </Row>
            </ContainerBoot>
        </FooterContainer>
    );
}

export default Footer;