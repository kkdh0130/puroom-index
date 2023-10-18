import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

export default function IndexFooter() {
  return (
    <footer className="bg-light">
      <Container className="py-5">
        <Row className="g-4">
          <Col xs={12} lg={6} className="order-2 order-lg-1">
            <h5 className="fw-bold mb-3">(주) 푸름인재개발원</h5>
            <ul className="list-unstyled small text-secondary">
              <li>주소: 경기도 성남시 수정구 위례광장로 19, 아이페리온 12층 1201호</li>
              <li>Tel: 02-1899-6629</li>
              <li>Fax: 02-6281-9348</li>
              <li>E-mail: info@puroom.net</li>
              <li>개인정보책임자: 장두환</li>
              <li>사업자등록번호: 638-86-01526</li>
            </ul>
            <div className="small text-secondary">
              Copyright ⓒ 1970 주식회사 푸름인재개발원. All Rights Reserved
            </div>
          </Col>

          <Col className="d-flex flex-wrap justify-content-lg-end gap-4 order-lg-1">
            <Link className="text-decoration-none text-muted" href={"https://www.hrdpuroom.net"}>
              고객센터
            </Link>
            <Link className="text-decoration-none text-muted" href={"https://www.hrdpuroom.net"}>
              개인정보처리방침
            </Link>
            <Link className="text-decoration-none text-muted" href={"https://www.hrdpuroom.net"}>
              이용약관
            </Link>
            <Link className="text-decoration-none text-muted" href={"https://www.hrdpuroom.net"}>
              Contact
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
