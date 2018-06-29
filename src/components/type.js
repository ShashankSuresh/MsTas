import React from 'react';
import styled from 'styled-components';
import TextLoop from 'react-text-loop';

const Span = styled.span`
    color: #fff;
    font-size: 40px;

    @media (min-width: 320px) and (max-width: 768px) {
        font-size: 28px;
    }
`

const Typing = props => {
    return (
        <span>
            <TextLoop springConfig={{ stiffness: 180, damping: 8 }}>
                <Span>asdsa</Span>
                <Span>aslkdjas</Span>
                <Span>askldjas</Span>
            </TextLoop>
        </span>
    );
};

export default Typing;