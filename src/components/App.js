import React, { Component } from 'react';
import { Map, Marker, MarkerLayout } from 'yandex-map-react';
import './App.css';

class App extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPoint({ name: this.props.inputText });
  }

  handleChange = (e) =>  {
    this.props.updateInputText({ text: e.target.value });
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

  renderPoint(point) {
    return (
      <div key={point.id} className="point">
        <div className="text">
          {JSON.stringify(point)}
        </div>
        <div className="close-btn">
          X
        </div>
      </div>
    )
  }

  renderPointsBlock() {
    const { points } = this.props;

    if (points.length === 0) {
      return null;
    }

    return (
      <div className="points-block">
        {points.map(i => this.renderPoint(i))}
      </div>
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
