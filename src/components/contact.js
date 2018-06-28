import React from 'react'
import styled from 'styled-components'
import Container from '../components/common/container'
import Heading from '../components/common/heading'

const ServicesContainer = Container.extend`
    margin: 4rem auto 4rem auto;
`

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
    height: 350px;
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
    z-index: 1099;
`
const TextAreaContainer = styled.div`
    display: flex;
    width: 100%;
    overflow: hidden;
    clear: both;
    z-index: 1099;
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
    cursor: pointer;
    z-index: 1099;
`

const Contact = () => {
    return (
        <ServicesContainer>
            <Heading span={"contact us"}/>
            <FormContainer>
                <Form action="https://formspree.io/your@email.com"
                    method="POST">
                    <InputContainer>
                        <Input type="text" name="name" placeholder="Enter your name"/>
                        <Input type="email" name="_replyto" placeholder="Enter your email"/>
                    </InputContainer>
                    <TextAreaContainer>
                        <TextArea type="text" placeholder="Enter your message"></TextArea>
                    </TextAreaContainer>
                    <Button type="submit" value="Send">Submit</Button>
                </Form>
            </FormContainer>
        </ServicesContainer>
    )
}

export default Contact;