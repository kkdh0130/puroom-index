import styled from "styled-components";
import Image from "next/image";
import { Button } from "react-bootstrap";

export default function IndexContact() {
    return (
        <Contact fluid className="position-relative px-0">
            <img
             style={{ height: '400px', width: '2100px' }}
             src="/contact.png"
            />
            <div className="position-absolute top-50 start-50 translate-middle text-white text-center display-6 fw-bold">
              <p>푸름인재개발원에서</p>  
              <p>최신화된 교육을 만나보세요!</p>  
              <ContactButton style={{ backgroundColor: '#000', border: 'none' }}>교육신청 바로가기</ContactButton>
            </div>
        </Contact>
    );
}


const Contact = styled.div`
  p {
    white-space: nowrap;
  }
`;

const ContactButton = styled(Button)`
  color: #fff; 
  border: none;
  padding: 10px 20px; 
  margin-top: 20px; 
`;