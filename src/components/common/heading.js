import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Container from './container'
import Span from './span'
import Line from './line'

const Title = styled.h2`
    text-transform: capitalize;
    font-size: 70px
    color: #fff;
`

class Heading extends React.Component {
    render() {
        const spanData  = this.props.span;
        return (
            <Container>
                <Title>
                    <Span>{spanData}</Span>
                    <Line color={"#9a9a9a"} />
                </Title>
            </Container>
        );
    }
}

Heading.proptypes = {
    spanData: PropTypes.string
}

export default Heading;