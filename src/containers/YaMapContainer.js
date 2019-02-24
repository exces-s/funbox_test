import { connect } from 'react-redux';
import YaMap from '../components/YaMap';
// import { pointsSelector } from '../selectors';
import * as actionCreators from '../actions'


const mapStateToProps = ({ points, pointsOrder }) => ({
  points,
  pointsOrder,
})


export default connect(mapStateToProps, actionCreators)(YaMap);