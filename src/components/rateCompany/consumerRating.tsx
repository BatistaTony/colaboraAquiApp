import { Fragment, useState } from "react";
import StarsRatedCompany from "../companies/starsRated";
import { colorsApp } from "../layout/layoutStyle";
import {
  ConsumerAvatar,
  ConsumerRateStyle,
  BodyRating,
  ConsumerName,
  ConsumerStarsRating,
  RateTime,
  BodyTextRating,
  TextSuggestionRate,
  ButtonToggleSuggestionText,
} from "./companySuggestionAndRateStyle";

interface IRating {
  consumerName: string;
  stars: number;
  time: string;
  experience: string;
  feeling: string;
  suggestion?: string;
}

interface IProps {
  data: IRating;
}

export default function ConsumerRating({
  data: { consumerName, experience, feeling, stars, time, suggestion },
}: IProps) {
  const [showSuggestion, setShowSuggestion] = useState<boolean>(false);

  return (
    <ConsumerRateStyle>
      <ConsumerAvatar name={consumerName[0]}>{consumerName[0]}</ConsumerAvatar>
      <BodyRating>
        <ConsumerName>{consumerName}</ConsumerName>
        <div className="min_bdy_fr_strA_">
          <ConsumerStarsRating>
            <StarsRatedCompany
              color={colorsApp.roxo}
              classNames="startOnRating"
              stars={stars}
            />
          </ConsumerStarsRating>
          <RateTime>{time}</RateTime>
        </div>
        <BodyTextRating>{experience}</BodyTextRating>
        {suggestion !== "" && (
          <Fragment>
            {!showSuggestion && (
              <ButtonToggleSuggestionText
                onClick={() => setShowSuggestion(true)}
              >
                Ver Sugestão de melhoria
              </ButtonToggleSuggestionText>
            )}

            {showSuggestion && (
              <TextSuggestionRate
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="title_txt_fd_g">Sugestao de melhoria</p>

                <p>{suggestion}</p>

                <ButtonToggleSuggestionText
                  onClick={() => setShowSuggestion(false)}
                >
                  Ocultar Sugestão
                </ButtonToggleSuggestionText>
              </TextSuggestionRate>
            )}
          </Fragment>
        )}
      </BodyRating>
    </ConsumerRateStyle>
  );
}
