import React from "react";
import { Button, ButtonWrapper } from "./Buttons.styled";

const FeedbackOptions = ({
  onGoodIncrement,
  onNeutralIncrement,
  onBadIncrement,
}) => {
  return (
    <ButtonWrapper>
      <Button onClick={onGoodIncrement}>Good</Button>
      <Button onClick={onNeutralIncrement}>Neutral</Button>
      <Button onClick={onBadIncrement}>Bad</Button>
    </ButtonWrapper>
  );
};
export default FeedbackOptions;
