import React, { useState } from 'react';
import './home.css'
import {  Layout, Menu, Breadcrumb  } from 'antd';
import {
  Button, CardImg, CardTitle, CardText, CardGroup,
 CardSubtitle, CardBody, Container, Row, Col
} from 'reactstrap';
import {InstagramOutlined} from "@ant-design/icons"




const About = () => {
    const { Header, Content } = Layout;
return(
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu className="newNavMenu" theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1"><a href="/">Home</a></Menu.Item>
        <Menu.Item key="2"><a href="/pages/About">About</a></Menu.Item>
        <Menu.Item key="3"><a href="/pages/Albums">Albums</a></Menu.Item>
        {/* <Menu.Item key="4"><a href="/pages/photoAlbums/Ruth">Ruth</a></Menu.Item> */}
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <h2 className="site-layout-content siteTitle">About Us</h2>
      <p>Weyni Kahsay was born and raised in Dallas, Texas. Currently attending University of North Texas as a student majoring in New Media Art, Drawing and Painting. New Media is a broad art field focusing on Conceptual Art. It ranges from photography, video projection, video scratching, performance art, etc.

Creative Interests</p>
    </Content>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    
  </Layout>
  
);
}

export default About;