import { connect } from 'react-redux';
import App from '../components/App';
import * as actionCreators from '../actions';


const mapStateToProps = state => {
  return {
    points: state.points,
    inputText: state.inputText,
    pointsOrder: state.pointsOrder,
  }
};


export default connect(mapStateToProps, actionCreators)(App);