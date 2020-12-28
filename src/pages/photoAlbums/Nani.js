import React, { useState } from 'react';
import './photos.css'
import {  Layout, Menu, Breadcrumb, Image   } from 'antd';
// import ActionButton from 'antd/lib/modal/ActionButton';
// import ReactBnbGallery from 'react-bnb-gallery';
import 'react-bnb-gallery/dist/style.css';
import Gallery from 'react-grid-gallery';
import { Spring } from 'react-spring/renderprops';

// Images for Viewing
import Nani1 from "../../assets/Nani/Nani1.jpg";
import Nani2 from "../../assets/Nani/Nani2.jpg";
import Nani3 from "../../assets/Nani/Nani3.jpg";
import Nani4 from "../../assets/Nani/Nani4.jpg";
import Nani5 from "../../assets/Nani/Nani5.jpg";
import Nani6 from "../../assets/Nani/Nani6.jpg";
import Nani7 from "../../assets/Nani/Nani7.jpg";
import Nani8 from "../../assets/Nani/Nani8.jpg";
import Nani9 from "../../assets/Nani/Nani9.jpg";
import Nani10 from "../../assets/Nani/Nani10.jpg";
import Nani11 from "../../assets/Nani/Nani11.jpg";
import Nani12 from "../../assets/Nani/Nani12.jpg";
import Nani13 from "../../assets/Nani/Nani13.jpg";
import Nani14 from "../../assets/Nani/Nani14.jpg";
import Nani15 from "../../assets/Nani/Nani15.jpg";






const Nani = ({ in: inProp }) => {
    const { Header, Content, Footer } = Layout;
    // const [isOpen, setIsOpen] = useState(false);
    
return(
     
<>
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu className="newNavMenu" theme="dark" mode="horizontal" defaultSelectedKeys={['4']}>
        <Menu.Item key="1"><a href="/">Home</a></Menu.Item>
        <Menu.Item key="2"><a href="/pages/About">About</a></Menu.Item>
        <Menu.Item key="3"><a href="/pages/Albums">Albums</a></Menu.Item>
        
      </Menu>
    </Header>
    <br/>
    <h2 className=" siteTitle">Nani</h2>
    <br/>
    <Content style={{ padding: '0 50px' }}>
    <Spring 
    from={{opacity:0}}
    to={{opacity:1}}
    config={{delay:1000, duration:3000}}>
      { props => (
        <div style={props}>
<Image.PreviewGroup>
      <Image
        className="displayImages"
        width={200}
        src={Nani1}
      />
      <Image
        className="displayImages"
        width={200}
        src={Nani2}
      />
      <Image
        className="displayImages"
        width={200}
        src={Nani3}
      />
      <Image
        className="displayImages"
        width={200}
        src={Nani4}
      />
      <Image
        className="displayImages"
        width={200}
        src={Nani5}
      />
      <Image
        className="displayImages"
        width={200}
        src={Nani6}
      />
      <Image
        className="displayImages"
        width={200}
        src={Nani7}
      />
      <Image
        className="displayImages"
        width={200}
        src={Nani8}
      />
      <Image
        className="displayImages"
        width={200}
        src={Nani9}
      />
      <Image
        className="displayImages"
        width={200}
        src={Nani10}
      />
      <Image
        className="displayImages"
        width={200}
        src={Nani11}
      />
      <Image
        className="displayImages"
        width={200}
        src={Nani12}
      />
      <Image
        className="displayImages"
        width={200}
        src={Nani13}
      />
      <Image
        className="displayImages"
        width={200}
        src={Nani14}
      />
      <Image
        className="displayImages"
        width={200}
        src={Nani15}
      />

    </Image.PreviewGroup>
        </div>
      )}
    </Spring>
    

    </Content>
    <br/>
    
    {/* <Footer style={{ textAlign: 'center' }}>Jack of All Technologies ©2020 Created by Oseghale Okogbo</Footer> */}
  </Layout>
</> 

);
}

export default Nani;