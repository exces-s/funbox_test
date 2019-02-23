import React, { Component } from 'react';
import { YMaps } from 'react-yandex-maps';

import './App.css';
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
    const { points, itemsOrder } = this.props;

    if (points.length === 0) {
      return null;
    }

    return (
      <List
        items={points}
        order={itemsOrder}
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
                <FormContainer />
                {this.renderPointsBlock()}
              </div>

              {this.props.yaMapDataFetchingState}
              
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
