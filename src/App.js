import Main from './Main.js';
import { connect } from 'react-redux';

const mapStateToProp = (state) => {
  return {
    posts: state
  }
}

const App = connect(mapStateToProp)(Main)

export default App;