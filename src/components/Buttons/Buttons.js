import React from "react";
import { Button, ButtonWrapper } from "./Buttons.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonWrapper>
      <Button onClick={() => onLeaveFeedback("good")}>Good</Button>
      <Button onClick={() => onLeaveFeedback("neutral")}>Neutral</Button>
      <Button onClick={() => onLeaveFeedback("bad")}>Bad</Button>
    </ButtonWrapper>
  );
};
export default FeedbackOptions;
