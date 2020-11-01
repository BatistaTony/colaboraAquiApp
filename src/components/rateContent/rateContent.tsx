import {
  Container,
  Text,
  DivRowColumn,
  Input,
  Button,
} from './rateContentStyle';

import WithRouter from './tabCompanies';

export default function RateContent() {
  return (
    <Container>
      <Text>
        Pesquise por empresas ou orgãos. Escolhe a que desejas avaliar. Avalie e
        sugira melhorias !
      </Text>
      <DivRowColumn>
        <Input
          placeholder="Pesquisar por uma empresa ou orgão"
          img={'/images/search.png'}
        />

        <Button> Sugerir empresas </Button>
      </DivRowColumn>
      <WithRouter />
    </Container>
  );
}
