import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import GlobalStyles from './theme/globalStyles'
import Routes from './Routes'
import * as serviceWorker from './serviceWorker'
import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'

ReactDOM.render(
   <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Routes />
   </ThemeProvider>,

  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
