import AppNavigator from 'app/components/Navigation'
import { connect } from 'react-redux'

export default connect (
  state => ({
    nav: state.nav
  })
)(AppNavigator)