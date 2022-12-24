import { Link } from 'react-scroll';
import styled from 'styled-components';

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#010101' : '#A65CA5')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#D989D3' : '#010101')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  
  &:hover{
  transition: all 0.2s ease-in-out;
  background: ${({ primary }) => (primary ? '#D989D3' : '#FFFFFF')};
  color: #010101;
  }
`;
