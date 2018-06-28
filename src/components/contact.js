import React from 'react'
import styled from 'styled-components'
import Container from '../components/common/container'
import Heading from '../components/common/heading'
import Line from '../components/common/line'
import Span from '../components/common/span'

const FormContainer = styled.div`
    display: block;
    margin: 0 auto;
    width: 80%;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    max-width: 880px;
    height: 300px;
`

const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 98%;
    margin-bottom: 30px;

    & > input:first-child {
        margin-right: 6rem;
    }
`

const Input = styled.input`
    flex: 1;
    border-radius: 43px;
    height: 40px;
    background: transparent;
    border: 1px solid #fff;
    padding: 10px;
`

const TextArea = styled.textarea`
    height: 100px;
    width: 92%;
    border-radius: 43px;
    background: transparent;
    border: 1px solid #fff;
    padding: 30px;
`

const Button = styled.button`
    padding: 10px 50px;
    font-size: 18px;
    border-radius: 43px;
    margin-top: 20px;
    curosor: pointer;
`

const Services = () => {
    return (
        <Container>
            <Heading span={"contact us"}/>
            <FormContainer>
                <Form action="https://formspree.io/your@email.com"
                    method="POST">
                    <InputContainer>
                        <Input type="text" name="name" placeholder="Enter your name"/>
                        <Input type="email" name="_replyto" placeholder="Enter your email"/>
                    </InputContainer>
                    <TextArea type="text" placeholder="Enter your message"></TextArea>
                    <Button type="submit" value="Send">Submit</Button>
                </Form>
            </FormContainer>
        </Container>
    )
}

export default Services;