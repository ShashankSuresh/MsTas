import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import * as FontAwesome from 'react-icons/lib/fa'

const Container = styled.div`
    position: ${props => props.Position};
    left: ${props => props.left};
    top: 35%;
`

const Icon = styled.a`
    font-size: ${props => props.FontSize ? "12px" : "22px"};
    display: ${props => props.Display};
    margin-right: ${props => props.Margin ? '0px' : '22px'};
    margin-bottom: 40px;
    transition: transform 300ms ease-out;
    cursor: pointer;

    &:hover {
        transform: rotate(360deg);
        color: ${props => props.bgColor}
    }

    color: ${props => props.FooterFlag == true ? '#000' : '#fff'};;
    background: ${props => props.FooterFlag == true ? '#fff' : ''};
    padding: ${props => props.FooterFlag == true ? '10px' : ''};
    border-radius: ${props => props.FooterFlag == true ? '22px' : ''};
`

class Social extends React.Component {
    render() {
        return (
            <Container Position={this.props.position} left={this.props.left}>
                <Icon bgColor={'blue'} Display={this.props.display} Margin={this.props.margin} FooterFlag={this.props.footerFlag} FontSize={this.props.fontSize}><FontAwesome.FaFacebook /></Icon>
                <Icon bgColor={'red'} Display={this.props.display} Margin={this.props.margin} FooterFlag={this.props.footerFlag} FontSize={this.props.fontSize}><FontAwesome.FaInstagram /></Icon>
                <Icon bgColor={'pink'} Display={this.props.display} Margin={this.props.margin} FooterFlag={this.props.footerFlag} FontSize={this.props.fontSize}><FontAwesome.FaWhatsapp /></Icon>
                <Icon bgColor={'yellow'} Display={this.props.display} Margin={this.props.margin} FooterFlag={this.props.footerFlag} FontSize={this.props.fontSize}><FontAwesome.FaTwitter /></Icon>
            </Container>
        );
    }
}

Social.propTypes = {
    position: PropTypes.string,
    left: PropTypes.string,
    display: PropTypes.string,
    margin: PropTypes.string,
    footerFlag: PropTypes.bool,
    fontSize: PropTypes.string
};

export default Social;