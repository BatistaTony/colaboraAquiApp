import { useState } from "react";
import Emoje from "./emoji";
import { RatingEmojiContainer, RatingSingleEmoji } from "./rateCompanyStyle";

interface IProps {
  handleFeeling: any;
}

export default function RatingEmojis({ handleFeeling }: IProps) {
  const [feeling, setFeeling] = useState<string | null>(null);
  const [paint, setPaint] = useState<string | null>(false);

  const feelings = [
    { id: 1, title: "Horrivel" },
    { id: 2, title: "Pessimo" },
    { id: 3, title: "Normal" },
    { id: 4, title: "Bom" },
    { id: 5, title: "Muito Bom" },
  ];

  const addFeeling = (face: string) => {
    handleFeeling(face);
    setFeeling(face);
  };

  return (
    <RatingEmojiContainer>
      {feelings.map((value, index) => (
        <RatingSingleEmoji
          onClick={() => addFeeling(value.title)}
          clicked={value.title === feeling}
          key={index}
        >
          <Emoje clicked={value.title === feeling} face={value.id} />
          <p>{value.title}</p>
        </RatingSingleEmoji>
      ))}
    </RatingEmojiContainer>
  );
}
