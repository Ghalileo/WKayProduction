import React, { useState } from 'react';
import './photos.css'
import {  Layout, Menu, Breadcrumb  } from 'antd';
// import ActionButton from 'antd/lib/modal/ActionButton';
// import ReactBnbGallery from 'react-bnb-gallery';
import 'react-bnb-gallery/dist/style.css';
import Gallery from 'react-grid-gallery';
// Images for Viewing
import Ruth1 from "../../assets/Ruth/Ruth01.jpg";
import Ruth2 from "../../assets/Ruth/Ruth2.jpg";
import Ruth3 from "../../assets/Ruth/Ruth3.jpg";
import Ruth4 from "../../assets/Ruth/Ruth4.jpg";
import Ruth5 from "../../assets/Ruth/Ruth5.jpg";
import Ruth7 from "../../assets/Ruth/Ruth7.jpg";
import Ruth8 from "../../assets/Ruth/Ruth8.jpg";
import Ruth9 from "../../assets/Ruth/Ruth9.jpg";
import Ruth10 from "../../assets/Ruth/Ruth10.jpg";
import Ruth11 from "../../assets/Ruth/Ruth11.jpg";
import Ruth12 from "../../assets/Ruth/Ruth12.jpg";

const IMAGES =
[
{
  src: Ruth1,
  thumbnail: Ruth1,
  thumbnailWidth: 174,
  thumbnailHeight: 174,
  
  // isSelected: true,
//   tags: [{value: "Ruth", title: "Ruth"}, {value: "Ruth", title: "Ruth"}],
  caption: "Ruth (Weyni Kahsay - WKay Production)"
},
{
  src: Ruth2,
  thumbnail: Ruth2,
  thumbnailWidth: 174,
  thumbnailHeight: 174,
  // isSelected: true,
  
  caption: "Ruth (Weyni Kahsay - WKay Production)"
},
{
  src: Ruth3,
  thumbnail: Ruth3,
  thumbnailWidth: 174,
  thumbnailHeight: 174,
  // isSelected: true,
  caption: "Ruth (Weyni Kahsay - WKay Production)"
},
{
  src: Ruth4,
  thumbnail: Ruth4,
  thumbnailWidth: 174,
  thumbnailHeight: 174,
  // isSelected: true,
  
  caption: "Ruth (Weyni Kahsay - WKay Production)"
},
{
  src: Ruth5,
  thumbnail: Ruth5,
  thumbnailWidth: 174,
  thumbnailHeight: 174,
  // isSelected: true,
  
  caption: "Ruth (Weyni Kahsay - WKay Production)"
},
{
  src: Ruth7,
  thumbnail: Ruth7,
  thumbnailWidth: 174,
  thumbnailHeight: 174,
  // isSelected: true,
  
  caption: "Ruth (Weyni Kahsay - WKay Production)"
},
{
  src: Ruth8,
  thumbnail: Ruth8,
  thumbnailWidth: 174,
  thumbnailHeight: 174,
  // isSelected: true,
  
  caption: "Ruth (Weyni Kahsay - WKay Production)"
},
{
  src: Ruth9,
  thumbnail: Ruth9,
  thumbnailWidth: 174,
  thumbnailHeight: 174,
  // isSelected: true,
  
  caption: "Ruth (Weyni Kahsay - WKay Production)"
},
{
  src: Ruth10,
  thumbnail: Ruth10,
  thumbnailWidth: 174,
  thumbnailHeight: 174,
  // isSelected: true,
  
  caption: "Ruth (Weyni Kahsay - WKay Production)"
},
{
  src: Ruth11,
  thumbnail: Ruth11,
  thumbnailWidth: 174,
  thumbnailHeight: 174,
  // isSelected: true,
  
  caption: "Ruth (Weyni Kahsay - WKay Production)"
},
{
  src: Ruth12,
  thumbnail: Ruth12,
  thumbnailWidth: 174,
  thumbnailHeight: 174,
  // isSelected: true,
  
  caption: "Ruth (Weyni Kahsay - WKay Production)"
}
// {
//   src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
//   thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
//   thumbnailWidth: 174,
//   thumbnailHeight: 174,
//   // isSelected: true,
//   // tags: [{value: "Ruth", title: "Ruth"}, {value: "Ruth", title: "Ruth"}],
//   caption: "After Rain (Jeshu John - designerspics.com)"
// },
// {
//         src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
//         thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
//         thumbnailWidth: 174,
//         thumbnailHeight: 174,
//         tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
//         caption: "Boats (Jeshu John - designerspics.com)"
// },

// {
//         src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
//         thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
//         thumbnailWidth: 174,
//         thumbnailHeight: 174
// }

]





const Ruth = () => {
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
    <h2 className=" siteTitle">Ruth</h2>
    <br/>
    <Content style={{ padding: '0 50px' }}>
      
    <Gallery images={IMAGES} class="albumPhotos"/>
    
      
      {/* <>
        <button onClick={() => setIsOpen(true)}>
          Open gallery
        </button>
        <ReactBnbGallery
          show={isOpen}
          photos={PHOTOS}
          onClose={() => setIsOpen(false)}
        />
      </> */}
      
{/* <img src={Ruth}/> */}

    </Content>
    <br/>
    
    
  </Layout>
</> 
);
}

export default Ruth;