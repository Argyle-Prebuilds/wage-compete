import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import FirstContainer from './containers/FirstContainer'
import SecondContainer from './containers/SecondContainer'
import ThirdContainer from './containers/ThirdContainer'
import LegalTermsContainer from './containers/LegalTermsContainer'
import SecureRoute from './components/SecureRoute'

const Routes = () => (
  <Router>
    <Switch>
      <SecureRoute exact path="/" component={FirstContainer} />
      <Route exact path="/:partner" component={SecondContainer} />
      <Route exact path="/:partner/compare" component={ThirdContainer} />
      <Route exact path="/terms/legal-terms" component={LegalTermsContainer} />
    </Switch>
  </Router>
)

export default Routes
