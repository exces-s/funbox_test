import React from 'react';
import {
  Map,
  Placemark,
  Polyline,
  FullscreenControl,
  ZoomControl,
  GeolocationControl,
  TypeSelector
} from 'react-yandex-maps';
import { getCoordsArr, createLable, defaultCoords } from '../lib';


export default class YaMap extends React.Component {
  handleDragEnd = (id) => (e) => {
    const newCoords = e.originalEvent.target.geometry.getCoordinates();
    this.props.updatePointCoords({ id, newCoords });
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
          hintContent: createLable(points[id]),
          balloonContent: createLable(points[id]),
        }}          
      />
    ))
  }

  renderPolyline() {
    const { polylineCoords, pointsOrder } = this.props;

    if (pointsOrder.length <= 1) {
      return null;
    }

    return (
      <Polyline
        geometry={polylineCoords}
        options={{
          balloonCloseButton: false,
          strokeColor: '#000',
          strokeWidth: 3,
          strokeOpacity: 0.7,
        }}
      />
    );
  }

  renderControls() {
    return (
      <React.Fragment>
        <TypeSelector defaultState={{ expanded: false }} />
        <FullscreenControl />
        <GeolocationControl options={{ float: 'left' }} />
        <ZoomControl
          options={{
            size: 'auto',
            zoomDuration: 1000,
          }}
        />
      </React.Fragment>
    )
  }
  
  render() {
    const { lastPointCoords } = this.props;
    const mapCenterCoords = lastPointCoords || defaultCoords;

    return (
      <Map
        width="100%"
        height="100%"
        defaultState={{ center: defaultCoords, zoom: 7 }}
        state={{ center: mapCenterCoords, zoom: 7 }}
        modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
      >
        {this.renderControls()}
        {this.renderPoints()}
        {this.renderPolyline()}
      </Map>
    );
  }
}
                