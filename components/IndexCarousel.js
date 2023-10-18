import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';

function IndexCarousel() {
  const carouselStyle = {
    maxWidth: '2100px', 
    margin: '0 auto', 
  };

  const imageStyle = {
    width: '100%', 
    height: '500px', 
  };

  return (
    <div style={{ marginBottom: '120px' }}>
      <Carousel data-bs-theme="warning" style={carouselStyle}>
        <Carousel.Item>
        <div className="d-flex align-items-center">
          <div>
            <img
              className="d-block"
              src="/back_1.png"
              alt="First slide"
              style={imageStyle}
            />
          </div>
          <div className="position-absolute top-50 start-50 translate-middle text-center">
            <p className="text-black display-6 fw-bold">
              Connecting Dreams!
            </p>
            <p className="text-white display-5 fw-bold" style={{ marginTop: '40px' }}>
              "끊임없는 지식, 끊어지지 않는 연결"
            </p>
            <p className style={{ marginTop: '40px' }}>우리 회사 바브(vavv),</p>
            <p>당신의 꿈을 연결고리로 이어주는 파트너입니다.</p>
            <p>꿈을 키우세요, 바브가 응원하며 함께합니다.</p>
            <p>미래의 성공을 기대합니다.</p>
          </div>
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="d-flex align-items-center" style={{ background: 'linear-gradient(to right, #178feb, #ffffff)' }}>
          <div className="col-6">
            <img
              className="d-block"
              src="/study.png"
              alt="second slide"
              style={imageStyle}
            />
          </div>
          <div className="col-6 order-2">
            <div className="text-black text-left">
              <p className="display-6 fw-bold">
                기업교육 A부터 Z까지
              </p>
              <p>
                푸름인재개발원에서 한번에!
              </p>
              <div>
              <button className="btn btn-primary">
                직무역량교육 신청하기
              </button>
              <button className="btn btn-primary" style={{ marginLeft: '10px' }}>
                법정교육 신청하기
              </button>
              </div>
            </div>
          </div>
        </div>
        </Carousel.Item>
        {/* <Carousel.Item>
          <img
            className="d-block"
            src="/bn_7.png"
            alt="second slide"
            style={imageStyle}
          />
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
}



export default IndexCarousel;
