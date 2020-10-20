import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button,  Container, Row, Col, UncontrolledCarousel  } from 'reactstrap';
import img1 from "../assets/Aijha/DSC_4035_sepfreq.jpg";
import img2 from "../assets/Aijha/DSC_4410_sepfreq_2.jpg";
import img3 from "../assets/Aijha/DSC_4430_sepfreq_levels_color_1.jpg";
import img4 from "../assets/Aria jpeg/DSC_2366.jpg";
import img5 from "../assets/Aria jpeg/DSC_2406.jpg";
import img6 from "../assets/Aria jpeg/DSC_2432.jpg";
import img7 from "../assets/Nani Black and White Outfit/DSC_3403 removing the hand.jpg";
import img8 from "../assets/Nani Black and White Outfit/DSC_3378.jpg";
import img9 from "../assets/Nani Black and White Outfit/DSC_33302.jpg";
import img10 from "../assets/Ruth/Ruth_0001.jpg";
import img11 from "../assets/Ruth/Ruth_0003.jpg";
import img12 from "../assets/Ruth/Ruth_0011.jpg";



const Albums = () => {
    const Aijha = [
        {
          src: img1,
          altText: 'Slide 1',
          caption: 'Aijha',
          header: 'Slide 1 Header',
          key: '1'
        },
        {
          src: img2,
          altText: 'Slide 2',
          caption: 'Aijha',
          header: 'Slide 2 Header',
          key: '2'
        },
        {
          src: img3,
          altText: 'Slide 3',
          caption: 'Aijha',
          header: 'Slide 3 Header',
          key: '3'
        }
      ];
      const Aria = [
        {
            src: img4,
            altText: 'Slide 1',
            caption: 'Aria',
            header: 'Slide 1 Header',
            key: '1'
          },
          {
            src: img5,
            altText: 'Slide 2',
            caption: 'Aria',
            header: 'Slide 2 Header',
            key: '2'
          },
          {
            src: img6,
            altText: 'Slide 3',
            caption: 'Aria',
            header: 'Slide 3 Header',
            key: '3'
          }
    ];
    const Nani = [
        {
            src: img7,
            altText: 'Slide 1',
            caption: 'Nani',
            header: 'Slide 1 Header',
            key: '1'
          },
          {
            src: img8,
            altText: 'Slide 2',
            caption: 'Nani',
            header: 'Slide 2 Header',
            key: '2'
          },
          {
            src: img9,
            altText: 'Slide 3',
            caption: 'Nani',
            header: 'Slide 3 Header',
            key: '3'
          }
    ];
    const Ruth = [
        {
            src: img10,
            altText: 'Slide 1',
            caption: '',
            header: '',
            key: '1'
          },
          {
            src: img11,
            altText: 'Slide 2',
            caption: 'Ruth',
            header: 'Slide 2 Header',
            key: '2'
          },
          {
            src: img12,
            altText: 'Slide 3',
            caption: 'Ruth',
            header: 'Slide 3 Header',
            key: '3'
          }
    ];
    
    
      return (
          <>
        <div>
            <h1>Albums</h1>
            <Container>
                <Row xs="4">
                    <Col>
                        <UncontrolledCarousel items={Aijha}/>
                    </Col>
                    <Col>
                        <UncontrolledCarousel items={Aria}/>
                    </Col>
                    <Col>
                        <UncontrolledCarousel items={Nani}/>
                    </Col>
                    <Col>
                        <UncontrolledCarousel items={Ruth}/>
                    </Col>
                </Row>
                
            </Container>
        </div>
        </>
      );
}

export default Albums;