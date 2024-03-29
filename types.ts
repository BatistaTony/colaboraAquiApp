export interface IConsumer {
  userName?: string;
  province?: string;
  county?: string;
  dataNascimento?: number;
  password?: string;
  fullName?: string;
  phone?: string;
  email?: string;
  isKeepAnonymous?: boolean;
  userId?: string;
}

export interface ICompany {
  companyId?: string;
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

export interface IRating {
  id: number;
  consumerName: string;
  time: string | Date | number;
  experience: string;
  feeling: string;
  suggestion: string;
}

export interface IRankingState {
  companyId: string;
  companyName: string;
  companyLogo: string;
  companyStars: number;
  companyStatus?: string;
  companyDescription?: string;
  companyRates: {
    normal: number;
    positives: number;
    negatives: number;
  };
  position: number | string;
  feelings: {
    horrivel: number;
    pessimo: number;
    normal: number;
    bom: number;
    muitoBom: number;
  };
}
