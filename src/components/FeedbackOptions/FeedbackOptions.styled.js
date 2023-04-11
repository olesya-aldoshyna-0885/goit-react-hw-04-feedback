import styled from '@emotion/styled';

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`;

export const FeedbackBtn = styled.button`
  width: 80px;
  height: 40px;
  font-weight: 600;
  text-transform: capitalize;
  border-radius: 10px;
  border: none;
  font-size: 20px;
  &:hover {
    color: white;
    background-color: ${setBgColor};
  }
`;

function setBgColor({ value }) {
  switch (value) {
    case 'good':
      return 'green';
    case 'neutral':
      return 'blue';
    case 'bad':
      return 'red';
    default:
      return 'lightgrey';
  }
}