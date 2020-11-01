import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import {
  TabCompaninesContent,
  TabHeader,
  Tab,
  TabBody,
  CardCompanyContainer,
  Row,
} from './rateContentStyle';
import CardCompany from './cardCompany';

const Tabs = ({ router }) => {
  const {
    query: { tab },
  } = router;

  const isTabAll = tab === '1' || tab == null;
  const isTabPrivate = tab === '2';
  const isTabPublic = tab === '3';

  const arr = [0, 1, 2, 3, 4];
  const data = {
    name: 'Movicel',
    ranking: 3,
    avaliations: 120,
    logo: '/images/Movicel-2.png',
    discription:
      'Empresa de telecomunicações, mais focada em telefonia móvel e um montde outras coisas qualquer, empresa de telecomunicações, focada em telefonia móvel.',
  };

  return (
    <TabCompaninesContent>
      <TabHeader>
        <Tab selected={isTabAll}>
          <Link href={{ pathname: '/rate', query: { tab: '1' } }}>
            <p> Todas</p>
          </Link>
        </Tab>
        <Tab selected={isTabPrivate}>
          <Link href={{ pathname: '/rate', query: { tab: '2' } }}>
            <p> Provadas </p>
          </Link>
        </Tab>
        <Tab selected={isTabPublic}>
          <Link href={{ pathname: '/rate', query: { tab: '3' } }}>
            <p> Publicas </p>
          </Link>
        </Tab>
      </TabHeader>
      <TabBody>
        {isTabAll && (
          <React.Fragment>
            <Row>
              {arr.map((item) => (
                <CardCompany key={item} data={data} />
              ))}
            </Row>
          </React.Fragment>
        )}
        {isTabPrivate && <React.Fragment>This Tab two</React.Fragment>}
        {isTabPublic && <React.Fragment>This Tab three</React.Fragment>}
      </TabBody>
    </TabCompaninesContent>
  );
};

export default withRouter(Tabs);
