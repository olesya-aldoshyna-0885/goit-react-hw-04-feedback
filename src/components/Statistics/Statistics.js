import React from 'react';
import PropTypes from 'prop-types';
import { StatContainer, StatTitle } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <StatContainer>
    <StatTitle>Good: {good}</StatTitle>
    <StatTitle>Neutral: {neutral}</StatTitle>
    <StatTitle>Bad: {bad}</StatTitle>
    <StatTitle>Total: {total}</StatTitle>
    <StatTitle>Positive feedback: {positivePercentage}%</StatTitle>
  </StatContainer>
);

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
};

export default Statistics;