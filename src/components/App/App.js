import React, { useState } from 'react';
import { Container, Notification } from './App.styled';
import Section from 'components/Section';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = e => {
    const { value } = e.target;
   
    if (value === 'good') {
      return setGood(prevValue => prevValue + 1);
    }
    if (value === 'neutral') {
      return setNeutral(prevValue => prevValue + 1);
    }
    if (value === 'bad') {
      return setBad(prevValue => prevValue + 1);
    }
  };

  const total = good + neutral + bad;
  const positive = Math.round((good / total) * 100);

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={handleClick}
        />
      </Section>
      <Section title="Statistics">
        {good || neutral || bad ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positive}
          />
        ) : (
          <Notification>There is no feedback</Notification>
        )}
      </Section>
    </Container>
  );
};