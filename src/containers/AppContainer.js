import { connect } from 'react-redux';
import App from '../components/App';
// import { pointsSelector } from '../selectors';
import * as actionCreators from '../actions'


const mapStateToProps = state => {
  return {
    points: state.points,
    inputText: state.inputText,
    pointsOrder: state.pointsOrder,
    yaMapDataFetchingState: state.yaMapDataFetchingState,
  }
}


export default connect(mapStateToProps, actionCreators)(App);