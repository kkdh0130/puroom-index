import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Image from 'react-bootstrap/Image';

export default function IndexBest() {

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
            <TitleText style={{ textAlign: 'center '}}>인기 컨텐츠</TitleText>
            <ContentText style={{ fontSize: '15px', textAlign: 'center', marginBottom:'30px' }}>수강생들의 누적 조회수가 가장 높은 강의</ContentText>
          </TextSections>
            <Row>
              <Col xs={6} md={3}>
                <Image
                src="/메타버스.png" rounded
                style={{ width: '300px', height: '168px' }}
                />
                <ContentText
                style={{ fontSize: '18px',
                textAlign: 'center',
                marginTop:'10px' }}>
                메타버스 안에 우리 회사 만들기
                </ContentText>          
              </Col>
              <Col xs={6} md={3}>
                <Image src="/잘알남.png" rounded
                style={{ width: '300px', height: '168px' }}
                />
                <ContentText
                style={{ fontSize: '18px', 
                textAlign: 'center', 
                marginTop:'10px' }}>
                메타버스 잘 알려주는 남자
                </ContentText>          
              </Col>
              <Col xs={6} md={3}>
                <Image src="/지피티.png" rounded
                style={{ width: '300px', height: '168px' }}
                />
                <ContentText
                style={{ fontSize: '18px', 
                textAlign: 'center', 
                marginTop:'10px' }}>
                Chat GPT를 활용한 직무UP! 스킬UP!
                </ContentText>          
              </Col>
              <Col xs={6} md={3}>
                <Image src="/esg.png" rounded
                style={{ width: '300px', height: '168px' }}
                />
                <ContentText 
                style={{ fontSize: '18px', 
                textAlign: 'center', 
                marginTop:'10px' }}>
                알면 보이는 ESG</ContentText>          
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

const ContentText = styled.h5`
  text-align: center;
`;
