import { connect } from 'react-redux';
import Form from '../components/Form';
import * as actionCreators from '../actions';


const mapStateToProps = ({ geoObjects, inputText }) => {
  return {
    geoObjects,
    inputText,
  }
};


export default connect(mapStateToProps, actionCreators)(Form);