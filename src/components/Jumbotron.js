import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import header_img from '../assets/tape_final.jpg';

const Styles = styled.div `
    .jumbo {
        background: url(${header_img}) no-repeat;
        background-size: cover;
        color: #efefef;
        height: 20%;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: #000;
        opacity:0.5;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;



export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h2>Hi there, looking for digital consultancy?</h2>
                <h5>Challenge us today!</h5>
            </Container>
        </Jumbo>
    </Styles>
)