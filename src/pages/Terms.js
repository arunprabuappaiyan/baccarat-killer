import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';

const Terms = () => {
  return (
    <>
      <Container className="min-height-70">
        <div className="p-3">
          <div className="fs-1 fw-bold">Terms and Conditions</div>
          <br />
          <Alert variant="success">
            <Alert.Heading>Gentle reminder</Alert.Heading>
            <p>
              <ul>
                <li>
                  You are purchasing DIGITAL goods and no physical items will be
                  shipped.
                </li>
                <li>
                  Please allow up to 4 hours to receive your digital product.
                </li>
              </ul>
            </p>
          </Alert>

          <Card bg="light" key="light" text="dark" className="mb-2">
            <Card.Header className="fw-semibold">Disclaimer</Card.Header>
            <Card.Body>
              <Card.Text>
                Information provided is for educational purposes only. All forms
                of gambling contain risk. Must be of legal age. By ordering, you
                agree not to reveal to others any secrets contained in these
                gaming methods. By ordering, you agree to hold the seller
                harmless for any and all liability for any loss or losses which
                may be incurred by any person or persons using the whole or part
                of the contents of the methods, systems and plans supplied by
                the seller. All sales are final & there are no refunds because
                this product is 100% intellectual. By ordering, you agree to no
                chargebacks or disputes for any reason because this product is
                100% intellectual. Seller assumes no responsibility for the use
                of this product(s), financial losses or incidental and/or
                consequential damages arising from the use of this product(s).
                Sale of this product is not an inducement to gamble.
              </Card.Text>
            </Card.Body>
          </Card>

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

export default Terms;
