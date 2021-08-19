import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root {
    --dark-color: #252437;
    --white-color: #EAEAEC;
    --purple-logo: #7a75bc;
    --blue-logo: #BBE9F9;
    --my-shadow: 1px 4px 9px -6px rgba(37, 36, 55, 0.21);
    /*--my-anime: load-balls 1s cubic-bezier(.19, .57, .3, .98) infinite alternate;*/
    --my-anime: load-balls 1.9s ease infinite;
  }

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background: #eee;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  a {
      text-decoration: none;
    }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
