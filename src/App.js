import React from "react";
import Wrapper from "./components/Wrapper/Wrapper.styled";
import MainHeader from "./components/MainHeader/MainHeader.styled";
import Section from "./components/Section/Section";
import Statistics from "./components/StatisticsCounter/StatisticsCouner";
import FeedbackOptions from "./components/Buttons/Buttons";
import Notification from "./components/Notification/Notification";

class App extends React.Component {
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
  countTotalFeedback = () => {
    const totalFeedback = this.state.good + this.state.neutral + this.state.bad;
    return totalFeedback;
  };
  countPositiveFeedbackPercentage = () => {
    const PositiveFeedbackPercentage = Math.round(
      (this.state.good * 100) / this.countTotalFeedback()
    );
    return PositiveFeedbackPercentage;
  };
  render() {
    return (
      <Wrapper>
        <MainHeader />
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            onGoodIncrement={this.goodIncrement}
            onNeutralIncrement={this.neutralIncrement}
            onBadIncrement={this.badIncrement}
          />
        </Section>
        <Section title={"Statistics"}>
          {this.state.good ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback!" />
          )}
        </Section>
      </Wrapper>
    );
  }
}
export default App;
/* <Notification message="There is no feedback" />*/
