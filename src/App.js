import Wrapper from "./components/Wrapper/Wrapper.styled";
import MainHeader from "./components/MainHeader/MainHeader.styled";
import Container from "./components/Container/Container.styled";
import StatisticsCounter from "./components/StatisticsCounter/StatisticsCounter";

const App = () => {
  return (
    <Wrapper>
      <MainHeader />
      <Container>
        <StatisticsCounter />
      </Container>
    </Wrapper>
  );
};
export default App;
