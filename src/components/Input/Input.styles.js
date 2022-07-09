import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 8px;
`;

export const LabelWrapper = styled.span`
  display: block;
  margin-bottom: 4px;
  font-size: 16px;
`;

export const RequiredMark = styled.b`
  margin-left: 4px;
  color: orangered; 
`;

export const Field = styled.input`
  border: 1px solid dimgray;
  border-radius: 4px;
  padding: 8px 8px;
  margin-bottom: 4px;
  width: 100%;
  font-size: 16px;
  box-sizing: border-box;
`;

export const Error = styled.p`
  color: orangered;
`;