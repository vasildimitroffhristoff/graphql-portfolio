import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group'

import About from './pages/About'
import Landing from './pages/Landing'
import Layout from './components/Layout'
import NotFound from './components/NotFound'
import Project from './pages/Project'
import Projects from './pages/Projects'
import ScrollToTop from './utils/ScrollToTop'

function App({ location }) {
  const currentKey = location.pathname.split('/')[1] || '/'
  const timeout = { enter: 2500, exit: 300 }

  return (
    <ScrollToTop>
      <Layout>
        <TransitionGroup className="transition-group">
          <CSSTransition
            key={currentKey}
            timeout={timeout}
            classNames={'fade'}
            appear={true}
            in={true}
          >
            <section className="route-section">
              <Switch location={location}>
                <Route exact path="/" component={Landing} />
                <Route path="/about" component={About} />
                <Route
                  path="/projects"
                  component={Projects}
                />
                <Route
                  path="/project/:id"
                  component={Project}
                />
                <Route component={NotFound} />
              </Switch>
            </section>
          </CSSTransition>
        </TransitionGroup>
      </Layout>
    </ScrollToTop>
  )
}

export default withRouter(App)
