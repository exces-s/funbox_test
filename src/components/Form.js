import React from 'react';
import AsyncSelect from 'react-select/lib/Async';
import { createOptionsArr } from '../lib'


export default class Form extends React.Component {
  handleInputChange = (text) => this.props.updateInputText({ text })
  
  handleChange = (option) => this.props.addPoint({ point: option })

  fetchGeoObjects = async (query) => {
    this.props.clearGeoObjects()
    await this.props.getYaMapData({ query });

    return createOptionsArr(this.props.geoObjects)
  }
  
  render() {
    const { inputText } = this.props;
    return (
      <AsyncSelect
        cacheOptions
        loadOptions={this.fetchGeoObjects}
        onInputChange={this.handleInputChange}
        onChange={this.handleChange}
        value={inputText}
      />
    )
  }
}
