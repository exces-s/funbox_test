import React, { Component } from 'react';
import { Map, Marker, MarkerLayout } from 'yandex-map-react';
import './App.css';
// import Cross from '../cross.svg';


class App extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPoint({ name: this.props.inputText });
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

  renderPoint(point) {
    return (
      <li key={point.id} className="point">
        <div className="text">
          {point.name}
        </div>
        <div className="close-btn" onClick={this.removePoint(point.id)}>
          X
        </div>
      </li>
    )
  }

  renderPointsBlock() {
    const { points } = this.props;

    if (points.length === 0) {
      return null;
    }

    return (
      <ul className="points-block" id="points-block">
        {points.map(i => this.renderPoint(i))}
      </ul>
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
