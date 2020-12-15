import React, { Fragment, useEffect, useState } from "react";
import {
  Container,
  Image,
  Text,
  List,
  Bold,
  DivCurva,
} from "./rankingContentStyle";
import CardRanking from "./cardRanking";
import { useSelector } from "react-redux";
import { IRankingState } from "../../../types";
import Loading from "../spinner/loading";

export default function RankingContent() {
  const rankingState: Array<IRankingState> = useSelector(
    (state) => state.RankingState
  );

  return (
    <Container>
      <Image src="./images/image.svg" />
      <Text>
        <span>
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
        {rankingState.length <= 0 ? (
          <Loading />
        ) : (
          <Fragment>
            {rankingState.map(
              (item: IRankingState, index) =>
                item.companyStars && (
                  <CardRanking key={item.companyId} data={item} />
                )
            )}
          </Fragment>
        )}
      </List>
    </Container>
  );
}
