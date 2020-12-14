import Lottie from "react-lottie";
import animationData from "./../../constants/animations/20988-spinner.json";
import styled from "styled-components";
import { flexbox, sizesForEachScreens } from "../layout/layoutStyle";

interface IProps {
  desktop?: boolean;
}

const Loading = ({ desktop }: IProps) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <LoadinContainer desktop={desktop}>
      <Lottie
        isClickToPauseDisabled={true}
        options={defaultOptions}
        isStopped={false}
        isPaused={false}
      />
    </LoadinContainer>
  );
};

export default Loading;

const LoadinContainer = styled.div`
  height: 530px;

  position: absolute;
  ${flexbox()};
  box-sizing: border-box;
  bottom: 5%;

  @media (max-width: 950px) {
    display: ${({ desktop }) => (desktop ? "none" : "flex")};
  }

  @media (min-width: 1024px) and (max-width: 1024px) and (min-height: 1366px) and (max-width: 1366px) {
    display: ${({ desktop }) => (desktop ? "none" : "flex")};
  }

  ${sizesForEachScreens(
    [2924, 2500, 1700, 1625, 1500, 1180, 1000, 950],
    [490, 450, 370, 320, 300, 220, 200, 190],
    "height",
    "px"
  )}
`;
