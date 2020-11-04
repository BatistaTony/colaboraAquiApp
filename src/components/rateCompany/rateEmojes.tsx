import { useState } from "react";
import Emoje from "./emoji";
import { RatingEmojiContainer, RatingSingleEmoji } from "./rateCompanyStyle";

export default function RatingEmojis() {
  const [feeling, setFeeling] = useState<Number | null>(null);

  const feelings = [
    { id: 1, title: "Horrivel" },
    { id: 2, title: "Pessimo" },
    { id: 3, title: "Normal" },
    { id: 4, title: "Bom" },
    { id: 5, title: "Muito Bom" },
  ];

  return (
    <RatingEmojiContainer>
      {feelings.map((value, index) => (
        <RatingSingleEmoji key={index}>
          <Emoje
            onClick={() => setFeeling(value.id)}
            face={value.id}
            clicked={value.id === feeling}
          />
          <p>{value.title}</p>
        </RatingSingleEmoji>
      ))}
    </RatingEmojiContainer>
  );
}
