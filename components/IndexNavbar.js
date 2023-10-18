import Link from "next/link";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from "react-bootstrap";
import Image from "react-bootstrap";

function IndexNavbar() {
  const navLinkStyle = {
    position: 'relative',
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <img
          src="/logo-dark.png"
          alt="푸름인재개발원"
          width={120}
          height={20}
          style={{ marginRight: '50px' }}
        />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://subsidy.vavv.net/">고용보험환급과정안내</Nav.Link>
            <div style={{ width: '20px' }}></div>
            <Nav.Link href="https://hospital.vavv.net/">병원/의료과정</Nav.Link>
            <div style={{ width: '20px' }}></div>
            <Nav.Link href="https://legal.vavv.net/">법정필수의무교육</Nav.Link>
            <div style={{ width: '20px' }}></div>
            <Nav.Link href="https://safety.vavv.net/">안전보건교육센터</Nav.Link>
            <div style={{ width: '20px' }}></div>
            <Nav.Link href="https://udacitypartner.com/" style={navLinkStyle}>
              <span>|</span>
              <span style={{ marginLeft: '30px' }}>유다시티</span>
            </Nav.Link>
          </Nav>
          <Nav className="mr-auto">
            <Nav.Link href="https://hrdpuroom.vavv.net/">회사소개</Nav.Link>
            <Nav.Link href="https://www.hrdpuroom.net/">강의실이동하기</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="familysite">
          <select name="sitelist">
            <option value="#">VAVV</option>
            <option value="#">유다시티</option>
            <option value="#">사업주환급교육</option>
            <option value="#">안전보건교육센터</option>
          </select>
        </div>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
