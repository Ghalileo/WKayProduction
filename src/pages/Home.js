import React, { useState } from 'react';
import './home.css'
import {  Layout, Menu, Breadcrumb  } from 'antd';




const Home = () => {
    const { Header, Content, Footer } = Layout;
return(
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu className="newNavMenu" theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1"><a href="/">Home</a></Menu.Item>
        <Menu.Item key="2"><a href="/pages/About">About</a></Menu.Item>
        <Menu.Item key="3"><a href="/pages/Albums">Albums</a></Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      {/* <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb> */}
      <h2 className="site-layout-content siteTitle">WKay Production</h2>
    </Content>
    {/* <Footer style={{ textAlign: 'center' }}>Jack of All Technologies ©2020 Created by Oseghale Okogbo</Footer> */}
  </Layout>
  
);
}

export default Home;