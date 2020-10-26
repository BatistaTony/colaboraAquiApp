import styled from 'styled-components';

export const StarContainer = styled.div`
  width: ${({ width }) => `${width}%`};
  height: ${({ height }) => `${height}%`};

  background: rgba(252, 190, 10, 0.1);

  border-radius: 8px;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const StarIcon = styled.img`
  width: auto;
  height: 65%;
`;
