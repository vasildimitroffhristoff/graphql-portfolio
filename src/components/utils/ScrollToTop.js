import { useEffect } from 'react'
import { withRouter } from 'react-router-dom'

function ScrollIntoView({ children, location }) {
  useEffect(() => {
    if (location) {
      window.scrollTo(0, 0)
    }
  }, [])

  useEffect(() => {
    if (location) {
      window.scrollTo(0, 0)
    }
  }, [location])

  return children
}

export default withRouter(ScrollIntoView)
