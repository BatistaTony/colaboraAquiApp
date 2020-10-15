import styled, { createGlobalStyle } from "styled-components";

const chooseBackgroundByTitle = (title: string) => {
  switch (title) {
    case "Empresas" || "Avaliar": {
      return " url(/images/Grupo978.svg)";
    }

    default: {
      return "white";
    }
  }
};

export const LayoutStyled = styled.div`
  width: 100%;
  height: 100vh;
  background-size: cover;
  display: grid;
  grid-template-rows: 15% 85%;
  background: ${({ title }) => chooseBackgroundByTitle(title)};
  background-size: 100% 100%;
  overflow: hidden;
  position: absolute;

  @media (max-width: 3200px) {
    grid-template-rows: 10% 90%;
  }

  @media (max-width: 2700px) {
    grid-template-rows: 10% 90%;
  }

  @media (max-width: 2200px) {
    grid-template-rows: 100px auto;
  }
`;

export const GlobalStyle = createGlobalStyle`
*{
padding:0;
margin:0;
}




.my-node-enter {
  opacity: 0;
  display: block;
}

.my-node-enter-active {
  opacity: 1;
  transition: opacity 200ms;
}

.my-node-exit {
  opacity: 1;
}

.my-node-exit-active {
  opacity: 0;
  display: none;
}

`;

export const flexbox = (
  direction: string = "row",
  justify: string = "center",
  align: string = "center"
) => `
display:flex;
flex-direction:${direction};
justify-content:${justify};;
align-items: ${align}

`;

export const getFont = (font: string = "Regular") => `

@font-face {
  src: url(/fonts/Poppins/Poppins-${font}.ttf);
  font-family: Poppins-${font};
}

font-family: Poppins-${font};

`;

export const colorsApp = {
  orange: "#ffc300",
  darkGray: "#5081dd",
  roxo: "#4b55ba",
  kindaBlue: "#80b5f3",
  soDark: "#27353B",
};

export const sizesForEachScreens = (
  screens: Array<number>,
  valuesForScreen: Array<number | string>,
  property: string,
  unit?: string
) => {
  return screens
    .map(
      (value, index) =>
        `@media (max-width:${value}px)  {
      ${property}:${valuesForScreen[index] + unit};
    }`
    )
    .join(" ");
};

export const NormalFontSize = () =>
  sizesForEachScreens(
    [3200, 3000, 2500, 1930, 1500],
    [26, 22, 19, 17, 12],
    "font-size",
    "pt"
  );
