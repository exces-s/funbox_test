import React from 'react';
import { Map, Placemark } from 'react-yandex-maps';


const getCoordsArr = (geoObject) => {
  const stringCoords = geoObject.Point.pos;
  const [ lon, lat ] = stringCoords.split(' ');
  return [lat, lon];
}

export default class YaMap extends React.Component {
  handleDragend = (e) => {
    console.log('DRAGEND', e)
  }
  
  renderPoints() {
    const { points } = this.props;
    const keys = Object.keys(points);

    if (keys.length === 0) {
      return null;
    }

    return keys.map(key => (
      <Placemark 
        key={key}
        defaultGeometry={getCoordsArr(points[key])}
        onDragend={this.handleDragend}
        // balloonContent: 'цвет <strong>носика Гены</strong>',
        options={{
          draggable: true,
        }}
        properties={{
          iconCaption: 'текст',
          balloonContentLayout: 'nhfnfn',
        }}
      />
    ))
  }
  
  render() {
    console.dir(this.props.points)

    return (
      <Map
        width="100%"
        height="100%"
        defaultState={{ center: [55.75, 37.57], zoom: 9 }}
      >
        {this.renderPoints()}
      </Map>
    )
  }
}
                