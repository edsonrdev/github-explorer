import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   :root {
      --white: #fff;
      --black: #000;

      --gray-0: #fafafa;
      --gray-1: #f6f6f6;
      --gray-2: #ededed;
      --gray-3: #cfcfcf;
      --gray-4: #afafaf;
      --gray-5: #a8a8a8;
      --gray-6: #6a6a6a;
      --gray-7: #4f4f4f;
      --gray-8: #383838;

      --green: #1fdf1f;
      --green-light: #bfffcf;
      --green-dark: #4fe16f;
      --red: #e1274f;
      --pink: #ff648d;
      --blue: #64c4ff;
   }
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   body {
      background: var(--gray-1);
   }

   body, input, button, textarea, select {
      font-family: 'Inter', sans-serif;
   }

   a {
      text-decoration: none;
   }

   ul, ol {
      list-style: none;
   }
`;
