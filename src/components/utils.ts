export const translateProperty = (property: string): string => {
  switch (property) {
    case "userName": {
      return "Nome utilizador";
    }

    case "ageRange": {
      return "Faixa étaria";
    }

    case "county": {
      return "Municipio";
    }

    case "province": {
      return "Província";
    }

    case "password": {
      return "Senha";
    }

    default: {
      return "";
    }
  }
};
