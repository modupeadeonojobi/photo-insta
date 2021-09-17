import Main from './components/Main';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './redux/actions';


const mapStateToProp = (state) => {
  return {
    posts: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

const App = connect(mapStateToProp, mapDispatchToProps)(Main);

export default App;