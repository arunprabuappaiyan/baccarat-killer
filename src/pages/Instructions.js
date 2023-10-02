import { Container } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import ListGroup from 'react-bootstrap/ListGroup';

const Instructions = () => {
  return (
    <>
      <Container className="min-height-70">
        <div className="p-3">
          <div className="fs-1 fw-bold">Instructions</div>
          <br />
          <div className="h3">User-Friendly</div>
          <div className="">
            "Baccarat Killer" is a No1 Predictor it is very simple to use even a
            first time user can easy manage it with consistent profits in any
            online or live dealer.
          </div>
          <br />
          <div className="h3">"Baccarat Killer" is a Baccarat Predictor</div>
          <div className="">
            Want to Win the Games? Save your game, Analyze the game, and Repeat
            your games. Or, you can use the predict games and follow the Betting
            strategy.
            <br />
            <br />
            Integrated with your mobile played games. <br />
            Help you win the game. <br />
            Analyze your played game. <br />
            Predict the game for winning <br />
            We predict winning moves in the baccarat card game, making the game
            easy and enjoyable. Your task is just to follow the prompts and win.
          </div>
          <br />

          <Alert variant="info">
            <Alert.Heading className="fw-bold text-danger">
              Attention !
            </Alert.Heading>
            <ListGroup as="ol" numbered>
              <ListGroup.Item as="li">
                Baccarat Killer will not give you a 100% win.
              </ListGroup.Item>
              <ListGroup.Item as="li">
                Don't stay too long on one board, play short games on several.
              </ListGroup.Item>
              <ListGroup.Item as="li">
                If you have lost 1/3 of the stack, then do not tilt, exit the
                game, take a walk, relax.
              </ListGroup.Item>
              <ListGroup.Item as="li">
                Set a goal per session (for example, 10% of the stack). Remember
                that you can't win all the time.
              </ListGroup.Item>
              <ListGroup.Item as="li">
                Keep Winning Target of 3 units and 5 units as a Stop Loss per
                Table.
              </ListGroup.Item>
            </ListGroup>
          </Alert>
          <div className="h3">The Casino is Not Your Enemy</div>
          <div className="">
            The dealers, floor persons, While pit bosses often scrutinize the
            play of high rollers, they are just doing their jobs. Many of the
            casino employees are actually rooting for you to win. We have
            discussed how to get a dealer on your side by being friendly and
            using your tips advantageously. But your floor person is not against
            your winning. As long as you are not perceived as a threat to the
            casino's bankroll and are not engaged in behavior the casino objects
            to, e.g. card counting, you are free to win occasionally. Just don't
            rub it in their faces. <br />
            <br />
            Floor persons are the primary decision-makers on the amount of comps
            you get, and I always chat with the nearest floor person. Starting a
            conversation is easy. Once you are a credit player, you will
            interact with the floor person as soon as you buy in, by signing a
            marker. After establishing some rapport with a floor person, I will
            occasionally ask him or her for advice on certain baccarat wagers.
            It is always better to down play just how knowledgeable you are.
            Most floor persons enjoy helping players and like to show off their
            own expertise. <br />
            <br />
            In dealing with all casino personnel, your goal is to always be a
            polite, friendly person who likes the casino, enjoys talking to pit
            personnel, is impressed by the floor person's tremendous knowledge
            of baccarat, makes large wagers and doesn't quite know how to play
            baccarat correctly. This act will buy you a tremendous amount of
            unrestricted playing time, and your comp rate should go up
            exponentially. You are the perfect player from the casino's
            viewpoint, and the casino bosses will be willing to pay to ensure
            that you play in their casino.
          </div>
          <br />
          <div className="h3">Things to Avoid</div>
          <div className="">
            There are some things I just won't tolerate when I play baccarat.
            Top on my list of "the things I like least" are rude dealers. If a
            dealer starts making comments about my play, or is rude to other
            players, my advice is to just leave. You don't need this kind of
            aggravation. If you have a bad feeling about the table, trust your
            instincts and leave. <br />I also refuse to play with rude players.
          </div>
          <br />
          <div className="h3">Drinking</div>
          <div className="">
            You've been waiting for this part, haven't you? I have yet to read a
            book on gambling where the author does not admonish the reader not
            to drink. Professional baccarat players, I guess, are too engrossed
            in observing the game to even lift a glass to their beleaguered
            lips. If they do manage a drink, it has to be Evian water. For the
            bosses and for most players, having a drink while you play is part
            of the fun. Gamblers do it for sure. And you want to look like a
            gambler, right? I generally have a few drinks while I gamble. I also
            drink straight orange juice, coffee, iced tea and even ice water at
            the tables. Drinking something alcoholic at the craps table is one
            more signal to the pit that you are not a threat. I generally go
            slow on the alcoholic drinks and time my drinks. In general, the
            fact that you are a baccarat player will go a long way towards
            enhancing your reputation as a gambler.
          </div>
        </div>
      </Container>
    </>
  );
};

export default Instructions;
