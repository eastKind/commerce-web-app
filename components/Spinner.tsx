import styled, { keyframes } from 'styled-components';

interface SpinnerProps {
  size: number;
  color?: string;
}

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }  
`;

const Spinner = styled.div<SpinnerProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: ${({ size }) => Math.ceil(size / 8)}px solid
    ${({ color }) => color || 'black'};
  border-top-color: transparent;
  border-radius: 9999px;
  animation: ${rotate} 1.5s linear infinite;
`;

export default Spinner;
