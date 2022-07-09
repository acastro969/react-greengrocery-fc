import styled from 'styled-components';

export const Button = styled.button`
  color: white;
  border-radius: 4px;
  border: none;
  padding: 8px;
  font-weight: bold;
  background-color: ${props => props.secondary ? 'orangered' : 'yellowgreen'};
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 8px;
  width: 100%;
  filter: ${props => props.disabled && 'grayscale(60%)'};

  &:hover {
    background-color: ${props => props.secondary ? 'red' : 'forestgreen'};
  }
`;