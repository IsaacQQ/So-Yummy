import styled from 'styled-components';

const primeryColor = ({ theme: { colors } }) => colors.primaryLightTextNoChange;
const greenColor = ({ theme: { colors } }) => colors.footerSubscribeButtonBG;
const darkColor = ({ theme: { colors } }) => colors.footerBG;

export const Button = styled.button`
  color: ${primeryColor};
  border: 2px solid transparent;
  background: ${({ greenButton }) => (greenButton ? greenColor : darkColor)};

  width: 130px;
  height: 46px;
  font-size: 16px;

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.greenAccentSearch};
  }

  ${({ largeButton }) =>
    largeButton &&
    `
      width: 300px;
      height: 52px;
  `}
  ${({ styledButton }) =>
    styledButton &&
    `  
      height: 100px;
      clip-path: inset(25% 0 25% 0 round 15% 35% 15% 30%); 
  `};

  @media (min-width: ${({ theme: { devices } }) => devices.tablet}) {
    width: 160px;
    height: 52px;

    ${({ largeButton }) =>
      largeButton &&
      `
      width: 400px;
      height: 52px;
  `}

    ${({ styledButton }) =>
      styledButton &&
      `  
      height: 112px;
  `};
  }
`;
