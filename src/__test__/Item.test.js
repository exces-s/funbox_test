import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme'
import Item from '../components/Item';
import { point1, point2 } from './__fixtures__';


let mockFn;
  
beforeEach(() => {
  mockFn = jest.fn();
})


it('Should capturing snapshot of Item', () => {
  const renderedCmp =  renderer.create(
    <Item point={point1} removePoint={mockFn}/>
  ).toJSON();

  expect(renderedCmp).toMatchSnapshot();
});


it('Should invoke onClick functions', () => {
  const renderedCmp =  mount(
    <Item point={point1} removePoint={mockFn}/>
  );

  renderedCmp.find('.close-btn').simulate('click');
  expect(mockFn).toHaveBeenCalled();
});


it('Should render short text (only name) properly', () => {
  const renderedCmp =  mount(
    <Item point={point1} removePoint={mockFn}/>
  );
  
  const expected = point1.name;
  const text = renderedCmp.find('.text').text();
  expect(text).toEqual(expected);
});


it('Should render full text (name + description) properly', () => {
  const renderedCmp =  mount(
    <Item point={point2} removePoint={mockFn}/>
  );
  
  const name = point2.name;
  const description = point2.description;
  const expected = `${name} (${description})`
  const text = renderedCmp.find('.text').text();
  expect(text).toEqual(expected);
});
