import React, { useState } from 'react';
import './photos.css'
import {  Layout, Menu, Breadcrumb, Image   } from 'antd';
// import ActionButton from 'antd/lib/modal/ActionButton';
// import ReactBnbGallery from 'react-bnb-gallery';
import 'react-bnb-gallery/dist/style.css';
import Gallery from 'react-grid-gallery';

// Images for Viewing
import Aria1 from "../../assets/Aria/Aria1.jpg";
import Aria2 from "../../assets/Aria/Aria2.jpg";
import Aria3 from "../../assets/Aria/Aria3.jpg";
import Aria4 from "../../assets/Aria/Aria4.jpg";
import Aria5 from "../../assets/Aria/Aria5.jpg";
import Aria6 from "../../assets/Aria/Aria6.jpg";
import Aria7 from "../../assets/Aria/Aria7.jpg";
import Aria8 from "../../assets/Aria/Aria8.jpg";
import Aria9 from "../../assets/Aria/Aria9.jpg";
import Aria10 from "../../assets/Aria/Aria10.jpg";
import Aria11 from "../../assets/Aria/Aria11.jpg";






const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};

const Aria = ({ in: inProp }) => {
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
    <h2 className=" siteTitle">Aria</h2>
    <br/>
    <Content style={{ padding: '0 50px' }}>
    <Image.PreviewGroup>
      <Image
        className="displayImages"
        width={200}
        src={Aria1}
      />
      <Image
        className="displayImages"
        width={200}
        src={Aria2}
      />
      <Image
        className="displayImages"
        width={200}
        src={Aria3}
      />
      <Image
        className="displayImages"
        width={200}
        src={Aria4}
      />
      <Image
        className="displayImages"
        width={200}
        src={Aria5}
      />
      <Image
        className="displayImages"
        width={200}
        src={Aria6}
      />
      <Image
        className="displayImages"
        width={200}
        src={Aria7}
      />
      <Image
        className="displayImages"
        width={200}
        src={Aria8}
      />
      <Image
        className="displayImages"
        width={200}
        src={Aria9}
      />
      <Image
        className="displayImages"
        width={200}
        src={Aria10}
      />
      <Image
        className="displayImages"
        width={200}
        src={Aria11}
      />
    </Image.PreviewGroup>

    </Content>
    
    {/* <Footer style={{ textAlign: 'center' }}>Jack of All Technologies ©2020 Created by Oseghale Okogbo</Footer> */}
  </Layout>
</> 
)
}




export default Aria;