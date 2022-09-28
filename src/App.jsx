import { useGame } from './hooks/useGame';
import {
  Timer,
  Parag,
  Canvas,
  Result,
  Layout,
  Counter,
  SpanBold,
  Container,
  GlobalStyles,
  LeftSide,
  RightSide,
  PlayerOneBar,
  PlayerTwoBar,
  PlayerOneInner,
  PlayerTwoInner,
  TopBarContainer,
  StatusContainer,
  StartOver,
  Overlay,
} from './styles';
import 'twin.macro';

function App() {
  const { canvasRef, playerOneHealth, playerTwoHealth, isStarted, timer, result, handleStartButton } = useGame();

  const renderHealthBar = () => (
    <TopBarContainer>
      <StatusContainer>
        <PlayerOneBar>
          <PlayerOneInner health={playerOneHealth} />
        </PlayerOneBar>
        <Timer>
          <Counter>{timer}</Counter>
        </Timer>
        <PlayerTwoBar>
          <PlayerTwoInner health={playerTwoHealth} />
        </PlayerTwoBar>
      </StatusContainer>
      <Result>
        {result}
      </Result>
    </TopBarContainer>
  );

  const renderStartOverlay = () => (
    <Overlay isStarted={isStarted}>
      <StartOver onClick={!isStarted ? handleStartButton : null}>
        PLAY
      </StartOver>
    </Overlay>
  );

  return (
    <Layout>
      <GlobalStyles />
      <LeftSide>
        <Parag><SpanBold>Move:</SpanBold></Parag>
        <Parag>AWD/Arrow</Parag>
        <Parag><SpanBold>Attack:</SpanBold></Parag>
        <Parag>Space/Enter</Parag>
      </LeftSide>
        <Container>
          {renderHealthBar()}
          {renderStartOverlay()}
          <Canvas ref={canvasRef} />
        </Container>
      <RightSide />
    </Layout>
  );
}

export default App;
