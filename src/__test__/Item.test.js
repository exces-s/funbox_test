import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme'
import Item from '../components/Item';
import { point_USA, point_BRN } from './__fixtures__';


let mockFn;
  
beforeEach(() => {
  mockFn = jest.fn();
})

describe('Snapshot tests', () => {
  it('Should capturing snapshot of Item', () => {
    const renderedCmp =  renderer.create(
      <Item point={point_USA} removePoint={mockFn}/>
    ).toJSON();
  
    expect(renderedCmp).toMatchSnapshot();
  });
});


describe('Behavior tests', () => {
  it('Should invoke onClick functions', () => {
    const renderedCmp =  mount(
      <Item point={point_USA} removePoint={mockFn}/>
    );

    renderedCmp.find('.close-btn').simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });


  it('Should render short text (only name) properly', () => {
    const renderedCmp =  mount(
      <Item point={point_USA} removePoint={mockFn}/>
    );
    
    const expected = point_USA.name;
    const text = renderedCmp.find('.text').text();
    expect(text).toEqual(expected);
  });


  it('Should render full text (name + description) properly', () => {
    const renderedCmp =  mount(
      <Item point={point_BRN} removePoint={mockFn}/>
    );
    
    const name = point_BRN.name;
    const description = point_BRN.description;
    const expected = `${name} (${description})`
    const text = renderedCmp.find('.text').text();
    expect(text).toEqual(expected);
  });
});
