import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {  Layout} from 'antd';
import {InstagramOutlined} from "@ant-design/icons"
import { Container, Row, Col } from 'reactstrap';

const FooterPage = () => {
  const { Footer } = Layout;
  return (
            <Footer style={{ textAlign: 'center', backgroundColor:'transparent' }}><Row>
            <Col xs="6" sm="4">Ghalileo©2020</Col>
            <Col xs="6" sm="4">Jack Of All Technologies</Col>
            <Col sm="4">
              Check Us Out on Social Media.<a href="https://www.instagram.com/wkayproductions/" target="_blank">
                <br/>
                <InstagramOutlined /></a>
            </Col>
          </Row>
          </Footer>
  );
}

export default FooterPage;