import styled from 'styled-components';

export const Cart = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Bubble = styled.span`
  border-radius: 50%;
  font-size: 12px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  background-color: tomato;
`;

export const Panel = styled.div`
  color: black;
  font-size: initial;
  padding: 8px;
  display: flex;
  flex-direction: column;
  top: 50px;
  width: 300px;
  background-color: white;
  border-radius: 8px;
  border: 2px solid lightgray;
  position: absolute;
  right: 0;
`;

export const Products = styled.div`
  padding: 10px;
`;

export const Summary = styled.div`
  margin-bottom: 8px;
  text-align: center;
`;

export const ActionsWrapper = styled.div`
   padding: 0 10px;
    display: flex;
    flex-direction: column;
`;