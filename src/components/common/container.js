import styled from 'styled-components'

const Container = styled.section`
    overflow: hidden;
    display: block;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    z-index: 1099;

    &::after {
        display: block;
        content: "";
        clear: both;
    }
`

export default Container;