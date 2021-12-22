import React from "react";
import PropTypes from "prop-types";
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
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.object,
};
export default FeedbackOptions;
