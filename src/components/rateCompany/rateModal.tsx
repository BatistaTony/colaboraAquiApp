import React from 'react';

import {
  RateCompanyContainer,
  ButtonBack,
  RateCompanyTex,
  Bold,
  RateCompanyTextarea,
  SendRateButton,
  RetingEmojiContainer,
  RetingSingleEmoji,
  Background,
} from './rateCompanyStyle';

export function GoBack(item: boolean) {
  console.log(item);
  return item != null ? item : false;
}

const RateModal = ({ showTheModal, isActive }) => {
  const [textareaVal, setTexareaval] = React.useState('');

  var number: number;

  function HendleRate() {
    let data = {
      value: number,
      Feedback: textareaVal,
    };
    console.log(data);
  }

  const arr = [
    { id: 1, title: 'Horrivel' },
    { id: 2, title: 'Pessimo' },
    { id: 3, title: 'Normal' },
    { id: 4, title: 'Bom' },
    { id: 5, title: 'Muito Bom' },
  ];

  function RatingValue(id: number) {
    return id === number ? true : false;
  }

  function RatingEmojis() {
    return (
      <RetingEmojiContainer isActive={isActive}>
        {arr.map((item) => (
          <RetingSingleEmoji
            img={item.id}
            active={RatingValue(item.id)}
            onClick={() => {
              number = item.id;
            }}
            isActive={isActive}
          >
            <div></div>
            <p>{item.title}</p>
          </RetingSingleEmoji>
        ))}
      </RetingEmojiContainer>
    );
  }

  return (
    <RateCompanyContainer>
      <ButtonBack img={'/images/left.png'} onClick={() => showTheModal()} />

      <RateCompanyTex>
        Como classificas a tua experiência com este{' '}
        <Bold>serviço/empresa ?</Bold>
      </RateCompanyTex>
      <RatingEmojis />

      <RateCompanyTextarea
        type="submit"
        autofocus={false}
        placeholder="Como tu achas que eles podem melhorar ? (deixe a sua opinião)"
        onChange={(event: any) => {
          setTexareaval(event.target.value);
        }}
        value={textareaVal}
      />
      <SendRateButton onClick={() => HendleRate()}>
        Enviar Avaliação
      </SendRateButton>
      <Background>
        <img src={'/images/Elipse 1.svg'} />
        <img src={'/images/Elipse 36.svg'} />
        <img src={'/images/Polígono 2.svg'} />
      </Background>
    </RateCompanyContainer>
  );
};

export default RateModal;
