import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";


export default function IndexIntro() {
  useEffect(() => {
    AOS.init({
      duration: 600,
    });
  }, []);

  return (
    <Container style={{ marginBottom: "120px" }}>
        <Col data-aos="fade-up">
        <QuestionText>우리 회사에 맞는 교육, 찾고 계신가요?</QuestionText>
        </Col>
        <Col data-aos="fade-up" style={{ marginBottom: '60px' }}>
        <AnswerText>그렇다면 답은 푸름인재개발원에 있습니다!</AnswerText>
        </Col>
      <Row>
        <Col data-aos="fade-up">
          <div TextSections style={{ marginBottom: '20px' }}>
            <IntroImg
              src='/intro_1.png'
              style={{ width: '330px', height: '200px' }} 
            />
            <TitleText style={{ marginTop: '30px' }}>고객사에 맞는 맞춤형 콘텐츠 제작 및 운영</TitleText>
          </div>
          <ContentText>푸름인재개발원은 고객사의 필요에 따라, 단기간 내에 고품질 강의 콘텐츠가 신속하게 개발이 가능합니다.</ContentText>
        </Col>
        <Col data-aos="fade-up">
           <TextSections style={{ marginBottom: '20px' }}>
           <IntroImg
              src='/Intro_2.png'
              style={{ 
              width: '280px', 
              height: '200px', 
             }} 
            />
          <TitleText style={{ 
            marginTop: '30px',
            textAlign: 'center'
            }}>
            국내 최초 MOOC LMS</TitleText>
          </TextSections>
            <ContentText>
            edx를 활용한 국내 최초 MOOC기반 LMS 개발!
            단순한 동영상 재생에 머물러 있는 온라인 교육 플랫폼을 탈피한 체세대 교육 플랫폼을 제공합니다.
            </ContentText>
        </Col>
        <Col data-aos="fade-up">
          <TextSections style={{
            marginBottom: '20px'
            }}>
          <IntroImg
              src='/Intro_3.png'
              style={{ 
              width: '300px', 
              height: '200px' }} 
            />
          <TitleText style={{ marginTop: '30px' }}>고용노동부 사업주 환급과정 매출액 1위 (병원)</TitleText>
          </TextSections>
            <ContentText>1,600여개의 고객사와 30만명이 넘는 수강생이 푸름인재개발원을 선택했습니다. </ContentText>
        </Col>
      </Row>
    </Container>
  );
}

const TextSections = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const QuestionText = styled.div`
  font-size: 15px;
`;

const AnswerText = styled.h3`
  font-size: 30px;
`;

const TitleText = styled.h5`
  font-size: 19px;
`;

const ContentText = styled.h6`
  font-size: 14px;
`;

const IntroImg = styled.img`
  display: block;
  margin: 0 auto;
`;