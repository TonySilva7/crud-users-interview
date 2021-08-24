import 'react-toastify/dist/ReactToastify.css';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  

  :root {
    --white-color: #EAEAEC;
    --blue-light: #BBE9F9;
    --pink-lavender: #cfb3cd;
    --pink-thistle: #dfc2f2;
    --purple-logo: #7a75bc;
    --rhythm-color: #888098;
    --blue-primary: #5288d6;
    --charcoal-color: #344055;
    --my-shadow: 1px 4px 9px -6px rgba(37, 36, 55, 0.4);
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

  // toasts
  body .Toastify .Toastify__toast-container .Toastify__toast--success {
    background: var(--purple-logo);
  }

  body .Toastify .Toastify__toast-container .Toastify__toast--error {
    background: #e0665d;
  }
`;
