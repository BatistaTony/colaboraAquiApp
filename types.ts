export interface IConsumer {
  userName: string;
  province: string;
  county: string;
  dataNascimento: number;
  password: string;
}

export interface ICompany {
  companyName: string;
  companyLogo: string;
  companyStars: number;
  companyDescription: string;
  companyRatesNumber: number;
  companyPositionRanking: number;
  companyStatus: string;
}
