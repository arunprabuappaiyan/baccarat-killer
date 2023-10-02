import { Container } from 'react-bootstrap';
import Slide from '../components/Carousel';
import cardImg from '../assets/product-img.jpg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import productApk from '../assets/product_apk/Baccarat_killer.apk';
import Accordion from 'react-bootstrap/Accordion';

const Home = () => {
  const cardClick = () => {
    window.open('https://www.youtube.com/@mailcasinokiller', '_blank');
  };

  const downloadApk = () => {
    window.location.href = productApk;
  };

  return (
    <>
      <Container className="min-height-70">
        <div className="pt-5">
          <Card border="info">
            <Card.Header className="h2 fw-bold text-success text-center">
              Exclusive Limited-Time Offer: ONE DAY FREE TRAIL!
            </Card.Header>
            <Card.Body>
              Welcome to a game-changing opportunity in the world of Baccarat!
              we're thrilled to present an offer that's as rare as a winning
              streak - a <strong>ONE DAY FREE TRIAL</strong> before you commit
              to the full experience.
            </Card.Body>
          </Card>
        </div>

        <div className="p-1 shadow-lg my-5 bg-body-tertiary rounded bg-body-secondary bg-dark-subtle">
          <Slide />
        </div>

        <div className="border border-top rounded">
          <main className="content-wrapper d-flex justify-content-center py-4">
            <div className="col-sm-11 col-lg-9">
              <section className="container-fluid py-2 px-0">
                <h2 className="text-center fw-bold text-success">
                  Baccarat Killer No.1 Baccarat Prediction App
                </h2>
                <div className="p-1"></div>

                <header className="h3 fw-semibold py-2">
                  Product description
                </header>

                <section className="py-2">
                  <Accordion defaultActiveKey={['0', '1']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <strong>
                          Why should you seize this exclusive opportunity?
                        </strong>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p>
                          🃏<strong>Test the Waters:</strong> Dive into the
                          world of Baccarat like never before with absolutely no
                          strings attached. Our cutting-edge AI tool is at your
                          disposal for a full day, allowing you to explore its
                          capabilities and witness the magic it brings to your
                          game.
                        </p>
                        <p>
                          💡<strong>See the Future of Baccarat:</strong> Our AI
                          is designed to recognize patterns and decode the
                          intricacies of Baccarat in real-time. Witness
                          firsthand how it enhances your strategy, sharpens your
                          skills, and turns the odds in your favor.
                        </p>
                        <p>
                          🤑<strong>Risk-Free Winning:</strong> Imagine having
                          an edge over the casino, even if it's just for a day.
                          With our free trial, you get to experience what it's
                          like to play with the upper hand. The winnings you
                          secure during this trial period are yours to keep!
                        </p>
                        <p>
                          🔒<strong>No Obligations:</strong> We believe in the
                          power of our product, but we want you to decide. There
                          are no hidden commitments or surprises. If you love
                          what you see, you can proceed with confidence. If not,
                          you walk away with valuable insights gained during
                          your trial.
                        </p>
                        <p>
                          🌐<strong>Global Access:</strong> Whether you're an
                          international player or based in India, our payment
                          options are designed to cater to your convenience. We
                          accept all major payment methods, including UPI and
                          bank transfers. ights gained during your trial.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        <strong>
                          Introducing the Ultimate Baccarat Prediction App Your
                          Winning Edge!
                        </strong>
                      </Accordion.Header>
                      <Accordion.Body>
                        <p>
                          Are you ready to dominate the Baccarat tables like
                          never before? Say hello to the
                          <strong>"Baccarat Killer Prediction"</strong> Android
                          App, your secret weapon for unraveling the game's
                          mysteries and seizing victory with precision.
                        </p>
                        <p>
                          🔮<strong>Unmatched Prediction Accuracy:</strong>
                          &nbsp; Powered by state-of-the-art artificial
                          intelligence, our app boasts unrivaled accuracy in
                          predicting Baccarat outcomes. It deciphers complex
                          patterns and trends, giving you the upper hand with
                          every bet.
                        </p>
                        <p>
                          🎯<strong>Enhanced Strategy:</strong> Elevate your
                          gameplay with real-time insights. Our app doesn't just
                          predict; it empowers you with data-driven strategies
                          that make every decision count. Whether you're a
                          seasoned pro or new to Baccarat, our app is your
                          trusted advisor.
                        </p>
                        <p>
                          💰<strong>Maximize Your Winnings:</strong> Tired of
                          leaving the casino empty-handed? With "Baccarat Killer
                          Prediction," you'll experience a surge in your
                          winnings. Our app's precision ensures you're
                          consistently on the winning side of the table.
                        </p>
                        <p>
                          🌐<strong>User-Friendly Interface:</strong> We believe
                          in simplicity. Our app is designed with a
                          user-friendly interface so that you can focus on what
                          matters - winning! Navigate effortlessly, place bets
                          confidently, and watch your fortunes grow.
                        </p>
                        <p>
                          🕐<strong>Real-Time Updates:</strong> Stay in the loop
                          with instant game updates. Our app keeps you informed
                          about the latest odds, trends, and results, ensuring
                          you're always one step ahead of the competition.
                        </p>
                        <p>
                          🔒<strong>Secure and Trustworthy:</strong> Your data
                          security is our top priority. Rest assured that your
                          information is safeguarded, and our app operates with
                          transparency and integrity.
                        </p>
                        <p>
                          🌟<strong>One-Tap Access:</strong> Download the app
                          today and unlock the secrets to consistent Baccarat
                          success with just one tap. It's your time to shine.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </section>

                {/* divider */}
                <div className="border border-bottom my-4"></div>
                {/* divider */}

                <div className="d-flex justify-content-center">
                  <Card style={{ width: '22rem' }}>
                    <Card.Img
                      variant="top"
                      className="cursorPtr"
                      src={cardImg}
                      onClick={cardClick}
                      alt="Baccarat Prediction Application"
                    />
                    <Card.Body>
                      <Card.Title className="h2">
                        Baccarat Prediction App
                      </Card.Title>
                      <Card.Text>
                        <p>
                          These powerful tool will help you destroy the house
                          edge, you will be several steps ahead before making
                          any decision.
                        </p>
                        <p>
                          Make Baccarat sessions more productive and successful
                          with our Baccarat prediction tool.
                        </p>
                        <p className="card-text">
                          <hint className="text-body-secondary">
                            Click download to Get our Application in your
                            Device*
                          </hint>
                        </p>
                      </Card.Text>
                      <div className="d-grid">
                        <Button
                          size="lg"
                          variant="light"
                          className="d-flex justify-content-center align-items-center download-btn"
                          onClick={downloadApk}
                        >
                          <div>DOWNLOAD</div>
                          <div className="p-1"></div>
                          <i className="fa-solid fa-download fs-5 text-white"></i>
                        </Button>
                      </div>
                      <small className="text-body-secondary fw-light">
                        *Supports on Android
                      </small>
                    </Card.Body>
                  </Card>
                </div>
              </section>

              {/* divider */}
              <div className="border border-bottom my-3"></div>
              {/* divider */}

              <div className="">
                <Card border="info">
                  <Card.Header className="h2 fw-bold text-success text-center">
                    Exclusive Limited-Time Offer: ONE DAY FREE TRAIL!
                  </Card.Header>
                  <Card.Body>
                    Welcome to a game-changing opportunity in the world of
                    Baccarat! we're thrilled to present an offer that's as rare
                    as a winning streak - a <strong>ONE DAY FREE TRIAL</strong>{' '}
                    before you commit to the full experience.
                  </Card.Body>
                </Card>
              </div>

              <section className="content-header">
                <div className="container text-center">
                  <h3 className="text-red fs-2">
                    No. 1 Baccarat Prediction Application
                  </h3>
                  <h2 className="fs-4 text-start mt-4">
                    About The Application
                  </h2>
                </div>
              </section>
              <section className="content">
                <div className="container-fluid">
                  <p>
                    This Baccarat Killer prediction software/App identifies the
                    patterns using an algorithm to predict accurate results. It
                    is designed with highly accurate calculations working behind
                    this baccarat prediction software. This works on all the
                    platforms and in every casino from any part of the world
                  </p>
                  <p>
                    This is a Legit Technique: Once the Pattern is identified it
                    then shows the predictions to play.
                  </p>
                  <p>
                    Just have a bit of patience and play selected bets shown by
                    BEST Baccarat Prediction Software to win The system works on
                    any Baccarat table globally at any casino.
                  </p>
                </div>
              </section>
            </div>
          </main>
        </div>
      </Container>
    </>
  );
};

export default Home;
