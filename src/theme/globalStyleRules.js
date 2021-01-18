export default `
  html {
    font-size: 10px; // all rem app values will be calculated base on this value 
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus,
  input:-internal-autofill-selected,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    background-color: transparent;
    transition: background-color 5000s ease-in-out 0s;
  }

  body {
    position: relative;
    background-color: #f4f4f4;
    margin: 0;
    font-family: "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .overflow-hidden {
    overflow: hidden;
  }

  .modal-open {
    height: 100vh;
    overflow: hidden;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
  
  body, html, #root {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }

  h1 {
    margin: 0;
    font-size: 45px;
    font-weight: 500;
  }

  h2 {
    margin: 0;
    font-size: 30px;
    font-weight: 500;
  }

  h3 {
    margin: 0;
    font-size: 25px;
    font-weight: 300;
  }

  h5 {
    margin: 0;
    font-size: 16px;
    font-weight: 500;
  }

  p {
    margin: 0;
    font-size: 14px;
    line-height: 1.43;
  }
  
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
`
