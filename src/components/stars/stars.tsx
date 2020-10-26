import React from 'react';
import { StarContainer, StarIcon } from './startStyle';
const Stars = ({ val, width, height }) => {
  const arr = [1, 2, 3, 4, 5];

  const activIcon = '/images/icons8-star1.png';
  const disableIcon = '/images/icon-star-gray.png';
  return (
    <StarContainer height={height} width={width}>
      {arr.map((item) => (
        <StarIcon src={item <= val ? activIcon : disableIcon} />
      ))}
    </StarContainer>
  );
};

export default Stars;
