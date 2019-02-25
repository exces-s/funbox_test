import { connect } from 'react-redux';
import YaMap from '../components/YaMap';
import * as actionCreators from '../actions';
import * as selectors from '../selectors';


const mapStateToProps = (state) => ({
  points: state.points,
  pointsOrder: state.pointsOrder,
  lastPointCoords: selectors.lastPointCoordsSelector(state),
  polylineCoords: selectors.polylineCoordsSelector(state)
});


export default connect(mapStateToProps, actionCreators)(YaMap);