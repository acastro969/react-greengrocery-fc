import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  position: sticky;
  top: 0;
  background-color: yellowgreen;
`;

export const NavbarList = styled.ul`
  padding: 12px 32px;
  margin-bottom: 0;
  list-style: none;
  display: flex;
  align-items: center;
`;

export const Item = styled.li`
  margin-right: 12px;
  position: relative;
  
  &:last-child {
    margin-right: 0;
    margin-left: auto;
  }
`;

export const NavbarLink = styled(Link)`
  transition: all 0.1s;
  border-radius: 8px;
  padding: 4px;
  display: flex;
  color: white;
  font-size: 20px;
  text-decoration: none;

  &:hover {
    background-color: forestgreen;
  }
`;

