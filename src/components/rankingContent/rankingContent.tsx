import React from "react";
import {
  Container,
  Image,
  Text,
  List,
  Bold,
  DivCurva,
} from "./rankingContentStyle";
import CardRanking from "./cardRanking";

import Data from "../../constants/Data";

export default function RankingContent() {
  const position = Data.length;

  return (
    <Container>
      <Image src="./images/image.svg" />
      <Text>
        <span>
          {" "}
          Conheça as <Bold>melhores</Bold> empresas nacionais.
        </span>
        <span className="sec_TExt_fdghd">
          de acordo com os próprios <span>consumidores</span> .
        </span>
      </Text>
      <List>
        <DivCurva>
          <div className="curvaL"></div>
        </DivCurva>
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
