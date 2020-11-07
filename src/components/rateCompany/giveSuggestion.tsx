import { useState } from "react";
import { GiveSuggestionContianer, RateCompanyText } from "./modalStyle";
import TextareaRate from "./textareaRate";

interface IProps {
  handleSuggestionValue: any;
  value: string;
}

export default function GiveSuggestion({
  handleSuggestionValue,
  value,
}: IProps) {
  return (
    <GiveSuggestionContianer
      initial={{ opacity: 0, x: -500 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -500 }}
    >
      <RateCompanyText>
        Deixa a Sua
        <span> SUgestão de melhoria</span>
      </RateCompanyText>

      <p className="textGivSUgg">
        as sugestões de melhoria fazem de ti um verdadeiro colaborador.
      </p>

      <TextareaRate
        value={value}
        placeholder="Descreva a sugestão"
        name="consumerSuggestion"
        handleChange={(event) => handleSuggestionValue(event)}
      />
    </GiveSuggestionContianer>
  );
}
