/* eslint-disable jsx-a11y/img-redundant-alt */
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../assets/slide001.webp';
import slide2 from '../assets/slide002.webp';

const Slide = () => {
  return (
    <Carousel variant="dark" fade className="rounded-5">
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={slide1} alt="Image One" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={slide2} alt="Image One" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Slide;
