import React from 'react'
import styled from 'styled-components'
import browserSVG from '../img/browser-white.svg'
import Container from '../components/common/container'
import Heading from '../components/common/heading'
import Line from '../components/common/line'

const ImageContainer = styled.div`
    width: 70%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`

const ImageContent = styled.div`
    flex: 1; 
`

const ImageParagraph = styled.p`
    color: #fff;
    font-size: 22px;
    margin-top: 40px;
`

const Services = () => {
    return (
        <Container>
            <Heading span={"services"}/>
            <ImageContainer>
                <ImageContent>
                    <img src={browserSVG} alt="" height="150" />
                    <Line color={"#00b4d9"} />
                    <ImageParagraph>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </ImageParagraph>
                </ImageContent>
                <ImageContent>
                    <img src={browserSVG} alt="" height="150" />
                    <Line color={"#00b4d9"} />
                    <ImageParagraph>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </ImageParagraph>
                </ImageContent>
                <ImageContent>
                    <img src={browserSVG} alt="" height="150" />
                    <Line color={"#00b4d9"} />
                    <ImageParagraph>
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </ImageParagraph>
                </ImageContent>
            </ImageContainer>
        </Container>
    )
}

export default Services;