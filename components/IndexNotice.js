import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Image from 'react-bootstrap/Image';

export default function IndexNotic() {

  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

  return (
    <Container style={{ marginBottom: "120px" }}>
      <Row>
        <Col data-aos="fade-up">
          <div>
            <a href="https://subsidy.vavv.net/refundprogram/">
            <Image src="/check.png"
            style={{ width: '280px', height: '220px' }} 
            rounded />
            </a>
          </div>
        </Col>
        <Col data-aos="fade-up">
          <div>
            <a href="https://www.hrdpuroom.net/bbs/board.php?bo_table=c_notice">
            <Image src="/notice.png"
            style={{ width: '320px', height: '220px' }} 
            rounded />
            </a>
          </div>
        </Col>
        <Col data-aos="fade-up">
          <div>
            <Image src="/review.png"
            style={{ width: '320px', height: '220px', marginBottom:'20px' }} 
            rounded />
          </div>
        </Col>
        <Col data-aos="fade-up">
          <div>
          <Image src="/information.png"
           style={{ width: '300px', height: '230px', marginBottom:'20px' }} 
           rounded />
          </div>
        </Col>
        {/* <Col data-aos="fade-up" className="d-flex">
          <div>
            <Image src="/mario.jpeg"
            style={{ width: '150px', height: '150px', marginBottom: '20px'}} 
            roundedCircle />
            <Text>교육과정 리스트 받기</Text>
          </div>
          <div>
            <Image src="/mario.jpeg"
            style={{ width: '150px', height: '150px', marginBottom: '20px' }} 
            roundedCircle />
            <Text>위탁계약서 내려받기</Text>
          </div>
        </Col> */}
      </Row>
    </Container>
  );
}

const TitleText = styled.div`
  font-size: 25px;
  margin-bottom: 50px;
`;

const Text = styled.div`
  font-size: 20px;
  text-align: center;
`;


