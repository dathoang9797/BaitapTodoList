import styled, { createGlobalStyle } from 'styled-components/macro';
import fontPony from '@assets/fonts/Pony.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'fontGame';
    src: url(${fontPony});
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'fontGame' !important;
  }
  body {
    background: linear-gradient(
    90deg,
    rgba(48, 16, 255, 1) 0%,
    rgba(100, 115, 255, 1) 100%
    
  );
  height: 0 ;
  }
`;

export const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  max-width: 600px;
  background: rgba(0, 0, 0, 0.52);
  backdrop-filter: blur(3px);
  text-align: center;
  margin: 50px auto;
  border-radius: 10px;
  padding-bottom: 32px;
`;

export default GlobalStyle;
