import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Image from 'react-bootstrap/Image';

export default function IndexHospital() {

  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

  return (
    <Container style={{ marginBottom: "100px" }}>
      <Row>
        <Col data-aos="fade-up">
          <TextSections>
            <TitleText style={{ textAlign: 'center '}}>의료기관 BEST 강의</TitleText>
            <ContentText style={{ fontSize: '15px', textAlign: 'center', marginBottom:'30px'}}>의료기관 종사자가 선정한 추천 강의</ContentText>
          </TextSections>
            <Row>
              <Col xs={6} md={3}>
                <Image src="/노무관리.png" rounded
                style={{ width: '300px', height: '168px' }}
                />
                <ContentText style={{ fontSize: '18px', textAlign: 'center', marginTop:'10px' }}>의료기관 종사자를 위한 노무관리</ContentText>
              </Col>
              <Col xs={6} md={3}>
                <Image src="/병동.png" rounded
                style={{ width: '300px', height: '168px' }}
                />
                <ContentText style={{ fontSize: '18px', textAlign: 'center', marginTop: '10px' }}>한방에 해결하는 병동관리</ContentText>
              </Col>
              <Col xs={6} md={3}>
                <Image src="/잡학.png" rounded
                style={{ width: '300px', height: '168px' }}
                />
                <ContentText style={{ fontSize: '18px', textAlign: 'center', marginTop:'10px' }}>알면 쓸모있는 의료행정 잡학사전</ContentText>
              </Col>
              <Col xs={6} md={3}>
                <Image src="/고객만족을위한.png" rounded 
                style={{ width: '300px', height: '168px' }}
                />
                <ContentText style={{ fontSize: '18px', textAlign: 'center', marginTop:'10px' }}>고객만족을 위한 의료서비스 전략</ContentText>          
              </Col>
            </Row>
        </Col>
      </Row>
    </Container>
  );
}

const TextSections = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const TitleText = styled.h3`
  font-size: 30px;
`;

const ContentText = styled.h4`
  font-size: 15px;
`;
