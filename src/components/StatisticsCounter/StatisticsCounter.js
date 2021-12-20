import React from "react";
import styled from "styled-components";

const StatisticsCounterBox = styled.div``;
const Title = styled.h2``;

const Button = styled.button`
  border: 1px solid #8b4513;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 12px;
  color: #8b4513;
  background-color: transparent;
  margin-right: 10px;
  &:hover,
  &:focus {
    color: #fff;
    background-color: #8b4513;
    cursor: pointer;
  }
`;

const StatisticsInfo = styled.ul`
  list-style: none;
  padding: 0;
`;

const StatisticsItem = styled.li``;

const CounterValue = styled.span`
  margin-left: 10px;
`;

class StatisticsCounter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodIncrement = () => {
    this.setState((prevState) => {
      return { good: prevState.good + 1 };
    });
  };
  neutralIncrement = () => {
    this.setState((prevState) => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  badIncrement = () => {
    this.setState((prevState) => {
      return { bad: prevState.bad + 1 };
    });
  };

  render() {
    return (
      <StatisticsCounterBox>
        <Title>Please leave feedback</Title>
        <Button onClick={this.goodIncrement}>Good</Button>
        <Button onClick={this.neutralIncrement}>Neutral</Button>
        <Button onClick={this.badIncrement}>Bad</Button>
        <Title>Statistics</Title>
        <StatisticsInfo>
          <StatisticsItem>
            Good:<CounterValue>{this.state.good}</CounterValue>
          </StatisticsItem>
          <StatisticsItem>
            Neutral:<CounterValue>{this.state.neutral}</CounterValue>
          </StatisticsItem>
          <StatisticsItem>
            Bad:<CounterValue>{this.state.bad}</CounterValue>
          </StatisticsItem>
          <StatisticsItem>
            Total:<CounterValue></CounterValue>
          </StatisticsItem>
          <StatisticsItem>
            Positive feedback:<CounterValue></CounterValue>
          </StatisticsItem>
        </StatisticsInfo>
      </StatisticsCounterBox>
    );
  }
}

export default StatisticsCounter;
