import { connect } from 'react-redux';
import App from '../components/App';
import { pointsSelector } from '../selectors';
import * as actionCreators from '../actions'


const mapStateToProps = state => {
  return {
    points: pointsSelector(state),
    inputText: state.inputText,
  }
}


export default connect(mapStateToProps, actionCreators)(App);