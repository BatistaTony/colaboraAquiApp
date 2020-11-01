import Layout from './../components/layout/layout';
import PrivateRouter from './privateRouter';

import RateCompany from '../components/rateCompany/rateCompany';

function Rate() {
  return (
    <Layout title={'Avaliar'}>
      <RateCompany id={1} />
    </Layout>
  );
}

export default PrivateRouter(Rate);
