import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme'
import Form from '../components/Form';
import * as fixtures from './__fixtures__';


let addPoint;
let getYaMapData;
let updateInputText;
let clearGeoObjects;
let geoObjects = {};
let optionsArr = [];


describe('Snapshot tests', () => {
  it('Should capturing snapshot of empty Form', () => {
    const renderedCmp = renderer.create(
      <Form
        inputText={fixtures.emptyInputText}
        geoObjects={geoObjects}
        optionsArr={optionsArr}
      />
    ).toJSON();
  
    expect(renderedCmp).toMatchSnapshot();
  });
})


describe('Test behavior', () => {
  let renderedCmp
  beforeEach(() => {
    addPoint = jest.fn();
    getYaMapData = jest.fn();
    updateInputText = jest.fn();
    clearGeoObjects = jest.fn();
    geoObjects = fixtures.geoObjects1;

    renderedCmp = mount(
      <Form
        inputText={fixtures.emptyInputText}
        geoObjects={geoObjects}
        optionsArr={optionsArr}
        addPoint={addPoint}
        getYaMapData={getYaMapData}
        clearGeoObjects={clearGeoObjects}
        updateInputText={updateInputText}
      />
    );
  })

  it('Should call updateInputText with updated text', () => {
    const fn = renderedCmp.instance().handleInputChange;
    fn(fixtures.notEmptyInputText);

    const expected = { text: fixtures.notEmptyInputText};
    expect(updateInputText).toHaveBeenCalledWith(expected);
  });


  it('Should create rawPoint and call addPoint', () => {
    const fn = renderedCmp.instance().handleChange;
    fn(fixtures.option11);

    const expected = { point: fixtures.rawPoint1};
    expect(addPoint).toHaveBeenCalledWith(expected);
  });


  it('Should call fetchGeoObjects width query', () => {
    const fn = renderedCmp.instance().fetchGeoObjects;
    fn(fixtures.notEmptyInputText);
      
    const expected = { query: fixtures.notEmptyInputText};
    expect(getYaMapData).toHaveBeenCalledWith(expected);
  });
})
