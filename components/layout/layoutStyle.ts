import styled, { createGlobalStyle } from "styled-components";

const chooseBgByTitle = (title: string) => {
  switch (title) {
    case "ColaboraAqui": {
      return "url(/images/bg1.png)";
    }

    default: {
      return "red";
    }
  }
};

export const LayoutStyled = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ title }) => chooseBgByTitle(title)};
  background-size: cover;
  display: grid;
  grid-template-rows: 100px auto;
  overflow: hidden;
`;

export const GlobalStyle = createGlobalStyle`
*{
padding:0;
margin:0;
}


.my-node {
  @media (min-width: 750px) {
    display: none;
  }
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
  valuesForScreen: Array<number>,
  property: string,
  unit: string
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
