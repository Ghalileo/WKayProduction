import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from "../components/Hero/index"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,  Container, Row, Col 
  } from 'reactstrap';

  const Home = () => {

    const myStyling = {
        textAlign: "center",
        color: "blue",
        
        
    }

   

    // const backOfPage = {
    //     background-image: url("https://images.unsplash.com/photo-1444211496661-a2f78323e039?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80");
    // }

    return (
        <>
        <Hero backgroundImage="https://images.unsplash.com/photo-1602526213012-e8bfd0f21501?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1891&q=80"></Hero>
            <Container>
                
                <Row>
                    <h1>WKay Production</h1>
                    <h1>Let Us Capture your best moments always</h1>
                    
                </Row>
            </Container>
            
        </>
      );
}

export default Home;