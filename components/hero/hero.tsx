import {
  ButtonStartRate,
  HeroStyle,
  ListStep,
  LogoHero,
  Step,
  Text,
  IllustrationRating,
} from "./heroStyle";

export default function Hero() {
  return (
    <HeroStyle>
      <LogoHero>
        <img src="/images/logo.png" alt="" />
      </LogoHero>
      <Text>
        Uma plataforma Web que te permite avaliar os serviços prestados pelos
        orgão e empresas nacionais
      </Text>
      <ListStep>
        <Step>
          <img src="/images/step1.png" alt="" />
          <span>Escolha</span>
        </Step>

        <Step>
          <img src="/images/step2.png" alt="" />
          <span>Avalie</span>
        </Step>

        <Step>
          <img src="/images/step3.png" alt="" />
          <span>Sugira</span>
        </Step>
      </ListStep>

      <ButtonStartRate>
        Começar a avaliar <img src="/images/start.png" alt="" />{" "}
      </ButtonStartRate>

      <IllustrationRating>
        <img src="/images/OnlineReview-rafiki.png" alt="" />
      </IllustrationRating>
    </HeroStyle>
  );
}
