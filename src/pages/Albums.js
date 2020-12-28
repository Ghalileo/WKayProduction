import React, { useState } from 'react';
import './albums.css'
import {  Layout, Menu, Breadcrumb, Card, Image  } from 'antd';
import {
   Button, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody, Container, Row, Col
} from 'reactstrap';
// import ActionButton from 'antd/lib/modal/ActionButton';
// import ReactBnbGallery from 'react-bnb-gallery';
import { Transition, Spring } from 'react-spring/renderprops';
import 'react-bnb-gallery/dist/style.css';
// import Gallery from 'react-grid-gallery';
import { createFromIconfontCN } from '@ant-design/icons';
// Images for Viewing
import Ruth1 from "../assets/Ruth/Ruth01.jpg";
import Aijha1 from "../assets/Aijha/Aijha1.jpg";
import Aria11 from "../assets/Aria/Aria11.jpg";
import Nani4 from "../assets/Nani/Nani4.jpg";




// Page Icons
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});


const Albums = () => {
    const { Header, Content, Footer } = Layout;
    const [isOpen, setIsOpen] = useState(false);
return(
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu className="newNavMenu" theme="dark" mode="horizontal" defaultSelectedKeys={['3']}>
        <Menu.Item className="navTab" key="1"><a href="/">Home</a></Menu.Item>
        <Menu.Item className="navTab" key="2"><a href="/pages/About">About</a></Menu.Item>
        <Menu.Item className="navTab" key="3"><a href="/pages/Albums">Albums</a></Menu.Item>
        
      </Menu>
    </Header>
    <br/>
    <h2 className="site-layout-content siteTitle">Albums</h2>
    <br/>
    <Content style={{ padding: '0 50px' }}>
    
    <br/>
    {/* <Card className="basicCard" style={{ width: 300 }}>
      <img className="displayImages" src={Aijha1}/>
      <p>A Look into the beauty of a queen</p>
      <button><a href="/pages/photoAlbums/Aijha">View Album</a></button>
    </Card> */}

    <Spring 
    from={{opacity:0, marginBottom: 500}}
    to={{opacity:1, marginBottom:0}}
    config={{delay: 1000, duration:1500}}>
      
      { props => (
        <div style={props}>

        </div>
      )}
    </Spring>
    <Row>
        <Col xs="6" sm="4">
          <CardGroup>
            <Card className="basicCard" style={{ width: 300 }}>
              <Image
                className="displayImages"
                width={200}
                src={Nani4}
              />
              {/* <p>A Look into the beauty of a queen</p> */}
              <h3 className="allH3">Nani <a href="/pages/photoAlbums/Nani"><i className="fa fa-camera cameraIcon" style={{fontSize:"26px"}}></i></a></h3>
              
            </Card>
          </CardGroup>
        </Col>
        <Col xs="6" sm="4">
          <Card className="basicCard" style={{ width: 300 }}>
            <Image className="displayImages"  width={200} src={Ruth1}/>
            {/* <p>An arrangement of Vibrant Artistry</p> */}
            <h3 className="allH3">Ruth <a href="/pages/photoAlbums/Ruth"><i className="fa fa-camera cameraIcon" style={{fontSize:"26px"}}></i></a></h3>
            
          </Card>
        </Col>
        <Col sm="4">
        <Col xs="6" sm="4">
          <Card className="basicCard" style={{ width: 300 }}>
            <Image className="displayImages" width={200} src={Aria11}/>
            <h3 className="allH3">Aria <a href="/pages/photoAlbums/Aria"><i className="fa fa-camera cameraIcon" style={{fontSize:"26px"}}></i></a></h3>
            
          </Card>
        </Col>
        </Col>
      </Row>
      <Row>
        <Col xs="6" sm="4">
          <CardGroup>
            <Card className="basicCard" style={{ width: 300 }}>
              <Image
                className="displayImages"
                width={200}
                src={Aijha1}
              />
              {/* <p>A Look into the beauty of a queen</p> */}
              <h3 className="allH3">Aijha <a href="/pages/photoAlbums/Aijha"><i className="fa fa-camera cameraIcon" style={{fontSize:"26px"}}></i></a></h3>
              
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Content>
    
    {/* <Footer style={{ textAlign: 'center' }}>Jack of All Technologies ©2020 Created by Oseghale Okogbo</Footer> */}
  </Layout>
  
);
}

export default Albums;