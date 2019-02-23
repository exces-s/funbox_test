import React from 'react';
import AsyncSelect from 'react-select/lib/Async';
import { createOptionsArr, createPointObject } from '../lib'


export default class Form extends React.Component {
  handleInputChange = (text) => this.props.updateInputText({ text })
  
  handleChange = (option) => {
    const { geoObjects, addPoint } = this.props;
    const { id } = option.value
    const geoObject = geoObjects[id]
    const point = createPointObject(geoObject)

    addPoint({ point })
  }

  fetchGeoObjects = async (query) => {
    this.props.clearGeoObjects()
    await this.props.getYaMapData({ query });
    
    return createOptionsArr(this.props.geoObjects)
  }
  
  render() {
    const { inputText } = this.props;
    return (
      <AsyncSelect
        loadOptions={this.fetchGeoObjects}
        onInputChange={this.handleInputChange}
        onChange={this.handleChange}
        value={inputText}
      />
    )
  }
}
