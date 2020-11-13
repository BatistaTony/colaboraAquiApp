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

export interface IProfile {
  fullName: string;
  userName: string;
  dataNascimento: number;
  phone: string;
  email: string;
  province: string;
  county: string;
  isKeepAnonymous: boolean;
}
