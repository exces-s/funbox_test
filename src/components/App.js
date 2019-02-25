import React, { Component } from 'react';
import { YMaps } from 'react-yandex-maps';
import '../styles/App.css';
import List from './List';
import FormContainer from '../containers/FormContainer';
import YaMapContainer from '../containers/YaMapContainer';
// import Cross from '../cross.svg';


export default class App extends Component {  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.getYaMapData({ query: this.props.inputText });
  }

  removePoint = (id) => () => {
    this.props.removePoint({ id })
  }
  
  renderPointsBlock() {
    const { points, pointsOrder } = this.props;

    if (points.length === 0) {
      return null;
    }

    return (
      <List
        items={points}
        order={pointsOrder}
        updatePointsOrder={this.props.updatePointsOrder}
        removePoint={this.removePoint}
      />
    )
  }

  
  render() {
    return (
      <YMaps>
        <div className="app">
          <div className="root">
            <div className="row">
              <div className="column">
                <div className='form'>
                  <FormContainer />
                </div>
                {this.renderPointsBlock()}
              </div>
              
              <div className="map">
                <YaMapContainer />
              </div>
            </div>
          </div>
        </div>
      </YMaps>
    );
  }
}
