import { connect } from 'react-redux';
import Form from '../components/Form';
import * as actionCreators from '../actions';
import * as selectors from '../selectors';


const mapStateToProps = (state) => {
  return {
    inputText: state.inputText,
    geoObjects: state.geoObjects,
    optionsArr: selectors.createOptionsArrSelector(state),
  }
};


export default connect(mapStateToProps, actionCreators)(Form);