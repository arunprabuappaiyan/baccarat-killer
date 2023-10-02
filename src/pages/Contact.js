import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Contact = () => {
  return (
    <>
      <Container className="min-height-70">
        <div className="p-3">
          <div className="fs-1 fw-bold">About Us</div>
          <br />

          <Card>
            <Card.Header className="fw-semibold">WHY CHOOSE US</Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <div className="">
                    <strong>100% Satisfactions:</strong> "BACCARAT KILLER"
                    Baccarat Predicting software is dedicated to both amateur
                    and professional players. Just install it and use it. Its
                    very simple.
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="">
                    <strong>High Win Accuracy:</strong> Our software offers very
                    high levels of accuracy and consistency. Players around the
                    world to earn consistent profits.
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="">
                    <strong>Universal Software:</strong> "BACCARAT KILLER"
                    Baccarat Predicting software works on whatever the gaming
                    platform or Baccarat type. This Software gives +- 95%
                    accuracy.
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="">
                    <strong>Best Price:</strong> Start earning form the first
                    day itself
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="">
                    <strong>User-Friendly:</strong> "BACCARAT KILLER' Baccarat
                    Predictiong is very simple to use even a first time user can
                    easy manage it with consistent profits in any online or live
                    dealer
                  </div>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="">
                    <strong>Support 24/7:</strong> Supports plays a violate role
                    in company growth. We provide 24x7 email supports to our
                    user. Please fill the contact form to reach us.
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          <br />
          <div className="fs-6">
            Contact:{' '}
            <a href="mailto:mailbaccaratkiller@gmail.com" class="link-info">
              mailbaccaratkiller@gmail.com
            </a>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
