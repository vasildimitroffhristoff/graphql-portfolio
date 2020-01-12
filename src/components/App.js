import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import About from './About'
import Landing from './Landing'
import Layout from './Layout'
import NotFound from './NotFound'
import Project from './Project'
import Projects from './Projects'
import ScrollToTop from './utils/ScrollToTop'

function App({ location }) {
  const currentKey = location.pathname.split('/')[1] || '/'
  const timeout = { enter: 3000 }

  return (
    <ScrollToTop>
      <Layout>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={currentKey}
                timeout={timeout}
                classNames="fade"
                appear={true}
                in
              >
                <Switch location={location}>
                  <Route exact path="/" component={Landing} />
                  <Route path="/about" component={About} />
                  <Route path="/projects" component={Projects} />
                  <Route path="/project/:id" component={Project} />
                  <Route component={NotFound} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </Layout>
    </ScrollToTop>
  )
}

export default withRouter(App)
