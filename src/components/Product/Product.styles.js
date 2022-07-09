import styled from 'styled-components';

export const Product = styled.div`
  border-top: 2px solid gainsboro;
  border-left: 2px solid lightgray;
  border-right: 2px solid lightgray;
  border-bottom: 2px solid gainsboro;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.1);
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: whitesmoke;
  padding: 32px 48px;
  min-height: 120px;
  margin-bottom: 8px;
`;

export const Details = styled.div`
 padding: 0 16px;
`;

export const Title = styled.h2`
  color: yellowgreen;
  margin-top: 4px;
  margin-bottom: 8px;
  font-size: 16px;
`;

export const Price = styled.p`
  font-weight: bold;
  margin-bottom: 20px;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: column; 
`;