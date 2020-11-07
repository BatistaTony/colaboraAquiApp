import React from "react";
import { Container, Image, Text, List, Bold } from "./rankingContentStyle";
import CardRanking from "./cardRanking";

import Data from "../../constants/Data";

export default function RankingContent() {
  const position = Data.length;

  return (
    <Container>
      <Image src="./images/image.svg" />
      <Text>
        Conheça as <Bold>melhores</Bold> empresas nacionais. de acordo com os
        próprios consumidores.
      </Text>
      <List>
        {Data.map((item, index) => (
          <CardRanking
            key={item.id}
            data={item}
            position={position}
            index={index}
          />
        ))}
      </List>
    </Container>
  );
}
