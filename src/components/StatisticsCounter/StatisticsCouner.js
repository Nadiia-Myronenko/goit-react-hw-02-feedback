import React from "react";
import {
  StatisticsList,
  StatisticsItem,
  CounterValue,
} from "./StatisticsCounter.styled";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatisticsList>
      <StatisticsItem>
        Good:<CounterValue>{good}</CounterValue>
      </StatisticsItem>
      <StatisticsItem>
        Neutral:<CounterValue>{neutral}</CounterValue>
      </StatisticsItem>
      <StatisticsItem>
        Bad:<CounterValue>{bad}</CounterValue>
      </StatisticsItem>
      <StatisticsItem>
        Total:<CounterValue>{total()}</CounterValue>
      </StatisticsItem>
      <StatisticsItem>
        Positive feedback:<CounterValue>{positivePercentage()}%</CounterValue>
      </StatisticsItem>
    </StatisticsList>
  );
};

export default Statistics;
