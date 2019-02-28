import React from 'react';
import debounce from "debounce-promise";
import AsyncSelect from 'react-select/lib/Async';
import texts from '../texts';
import { createRawPointObject, timeout } from '../lib';


const cmpTexts = texts.form;

export default class Form extends React.Component {
  handleInputChange = (text) => this.props.updateInputText({ text });
  
  handleChange = (option) => {
    const { geoObjects, addPoint } = this.props;
    const { id } = option.value;
    const geoObject = geoObjects[id];
    const point = createRawPointObject(geoObject);

    addPoint({ point });
  }

  fetchGeoObjects = async (query) => {
    this.props.clearGeoObjects();
    await this.props.getYaMapData({ query });

    return this.props.optionsArr;
  }

  debouncedFetch = debounce(this.fetchGeoObjects, timeout, { leading: true })

  render() {
    const { inputText } = this.props;

    return (
      <AsyncSelect
        loadOptions={query => this.debouncedFetch(query)}
        onInputChange={this.handleInputChange}
        onChange={this.handleChange}
        value={inputText}
        placeholder={cmpTexts.placeholder}
        components={
          {
            DropdownIndicator: () => null,
            IndicatorSeparator: () => null
          }
        }
      />
    );
  }
}
