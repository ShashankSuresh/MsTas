import React from 'react';
import styled from 'styled-components';
import Container from '../components/common/container'
import Heading from '../components/common/heading'

const AboutContainer = Container.extend`
    margin: 4rem auto 4rem auto;
    z-index: 1099;
`

const PragraphContainer = styled.div`
    display: block;
    width: 70%;
    margin: 0 auto;

    & > p:first-child {
        margin-bottom: 30px;
    }
`

const Paragraph = styled.p`
    color: #fff;
    font-size: 26px;
    font-weight: bold;
    letter-spacing: -1px;

    @media (min-width: 320px) and (max-width: 768px) {
        font-size: 18px;
        font-weight: normal;
    }
`

const ParagraphColored = Paragraph.extend`
    color: #878787;
`

const About = () => {
    return (
        <AboutContainer>
            <Heading span={"about us"}/>
            <PragraphContainer>
                <Paragraph>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Paragraph>
                <ParagraphColored>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </ParagraphColored>
            </PragraphContainer>
        </AboutContainer>
    );
}

export default About;