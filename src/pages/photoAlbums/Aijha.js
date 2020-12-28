import React, { useState, useCallback } from 'react';
import './photos.css'
import {  Layout, Menu, Breadcrumb  } from 'antd';
// import ActionButton from 'antd/lib/modal/ActionButton';
// import ReactBnbGallery from 'react-bnb-gallery';
import 'react-bnb-gallery/dist/style.css';
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
// Images for Viewing
import aijhasPhotos from "./aijhasPhotos"










const Aijha = () => {
  const { Header, Content, Footer } = Layout;
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
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
    <h2 className=" siteTitle">Aijha</h2>
    <br/>
    
    <Content style={{ padding: '0 50px' }}>
    <div>
      <Gallery photos={aijhasPhotos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={aijhasPhotos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
      
    
      


    </Content>
    
    
    {/* <Footer style={{ textAlign: 'center' }}>Jack of All Technologies ©2020 Created by Oseghale Okogbo</Footer> */}
  </Layout>
</> 
);
}

export default Aijha;
// render(<Aijha />, document.getElementById("root"));