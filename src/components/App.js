import React, { Component } from 'react';
import { Map, Marker, MarkerLayout } from 'yandex-map-react';
import './App.css';
import List from './List';
// import Cross from '../cross.svg';


class App extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.getYaMapData({ query: this.props.inputText });
  }

  handleChange = (e) =>  {
    this.props.updateInputText({ text: e.target.value });
  }

  removePoint = (id) => () => {
    this.props.removePoint({ id })
  }
  
  renderForm() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input
          className="input"
          type="text"
          onChange={this.handleChange}
          value={this.props.inputText}
        />
      </form>
    );
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
      <div className="app">
        <div className="root">
          <div className="row">
            <div className="column">
              {this.renderForm()}

              {this.renderPointsBlock()}
            </div>

            {this.props.yaMapDataRequest}
            <div className="map">
              <Map
                width="100%"
                height="100%"
                className="ya-map"
                onAPIAvailable={function () { console.log('API loaded'); }}
                center={[55.754734, 37.583314]}
                zoom={10}
              >
                  <Marker lat={this.props.lat} lon={this.props.lon} />
              </Map>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
