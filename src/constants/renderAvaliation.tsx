const RenderAvaliation = ({ item }) => {
  return item / 1000 < 1
    ? item
    : item / 1000 >= 1 && item / 1000 <= 999
    ? `${item / 1000}k`
    : item / 1000000 < 999 && item / 1000000 <= 999999
    ? `${item / 1000000}M`
    : `${item / 1000000000}B`;
};

export default RenderAvaliation;
