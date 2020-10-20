import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './about.css'
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button,  Container, Row, Col } from 'reactstrap';
import aboutImg from "../assets/Nani Black and White Outfit/DSC_34842.jpg";

const About = () => {

    const myStyling = {
        textAlign: "center",
        color: "blue",
        
        
    }

    return (
        <div>
            <h1>About Our Organization</h1>
            <Row>
            <Col md='6'>
                <br/>
                <br/>
                <img src={aboutImg}/>
                </Col>

                <Col md='6'>
                <br/>
                <br/>
                <p>Weyni Kahsay was born and raised in Dallas, Texas. Currently attending University of North Texas as a student majoring in New Media Art, Drawing and Painting. New Media is a broad art field focusing on Conceptual Art. It ranges from photography, video projection, video scratching, performance art, etc.</p>
                </Col>

            </Row>
        </div>
      );
}

export default About;