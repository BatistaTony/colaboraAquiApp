import React, { useRef } from 'react';

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

const RateModal = ({ showTheModal, companyId, visible }: any) => {
  const [val, setVal] = React.useState<Number>(0);
  const textareaValue = useRef<any>();

  function HendleRate() {
    let data = {
      value: val,
      Feedback: textareaValue.current.value,
      companyId: companyId,
    };

    if (data.value === 0 || data.value === null) {
      alert('Precisa de escolher uma opção para seguir com a avaliação!');
    } else if (
      data.value != 0 &&
      (data.Feedback === '' || data.Feedback === null)
    ) {
      alert('Tem certe que nao quer deixar uma opinao?');
      alert('Obrigado por avaliar a Empresa');
      setVal(0);
      textareaValue.current.value = '';
    } else {
      alert('Obrigado por avaliar a Empresa');
      setVal(0);
      textareaValue.current.value = '';
    }
  }

  const arr = [
    { id: 1, title: 'Horrivel' },
    { id: 2, title: 'Pessimo' },
    { id: 3, title: 'Normal' },
    { id: 4, title: 'Bom' },
    { id: 5, title: 'Muito Bom' },
  ];

  function ratingValue(id: number) {
    return id === val ? true : false;
  }

  function RatingEmojis() {
    return (
      <RetingEmojiContainer>
        {arr.map((item) => (
          <RetingSingleEmoji
            key={item.id}
            img={item.id}
            active={ratingValue(item.id)}
            onClick={() => {
              setVal(item.id);
            }}
          >
            <div></div>

            <p>{item.title}</p>
          </RetingSingleEmoji>
        ))}
      </RetingEmojiContainer>
    );
  }

  return (
    <RateCompanyContainer visible={visible}>
      <ButtonBack img={'/images/left.png'} onClick={() => showTheModal()} />

      <RateCompanyTex>
        Como classificas a tua experiência com este
        <Bold> serviço/empresa ?</Bold>
      </RateCompanyTex>

      <RatingEmojis />

      <RateCompanyTextarea
        ref={textareaValue}
        type="submit"
        autoFocus={false}
        placeholder="Como tu achas que eles podem melhorar ? (deixe a sua opinião)"
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
