import React from 'react';
import { Map, Placemark, Polyline } from 'react-yandex-maps';
import {
  getCoordsArr,
  getLastPointCoords,
  getPolylineCoords,
  createLable
} from '../lib';


export default class YaMap extends React.Component {
  handleDragEnd = (id) => (e) => {
    const newCoords = e.originalEvent.target.geometry.getCoordinates();
    this.props.updatePointCoords({ id, newCoords })
  }
  
  renderPoints() {
    const { points } = this.props;
    const ids = Object.keys(points);

    if (ids.length === 0) {
      return null;
    }

    return ids.map(id => (
      <Placemark 
        key={id}
        defaultGeometry={getCoordsArr(points[id])}
        onDragEnd={this.handleDragEnd(id)}
        options={{ draggable: true }}
        properties={{
          iconCaption: createLable(points[id]),
          hintContent: createLable(points[id]),
          balloonContent: createLable(points[id]),
        }}          
      />
    ))
  }

  renderLines() {
    const { points, pointsOrder } = this.props;
    const coords = getPolylineCoords(pointsOrder, points)

    if (pointsOrder.length <= 1) {
      return null;
    }

    return (
      <Polyline
        geometry={coords}
        options={{
          balloonCloseButton: false,
          strokeColor: '#000',
          strokeWidth: 3,
          strokeOpacity: 0.7,
        }}
      />
    )
  }
  
  render() {
    const { points, pointsOrder } = this.props;

    const lastPointCoords = getLastPointCoords(pointsOrder, points)
    const defaultCoords = [53.26, 34.41]
    const mapCenterCoords = lastPointCoords || defaultCoords

    return (
      <Map
        width="100%"
        height="100%"
        defaultState={{ center: defaultCoords, zoom: 7 }}
        state={{ center: mapCenterCoords, zoom: 7 }}
        modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
      >
        {this.renderPoints()}
        {this.renderLines()}
      </Map>
    )
  }
}
                