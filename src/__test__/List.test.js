import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme'
import List from '../components/List';
import * as fixtures from './__fixtures__';


let mockFn;
  
beforeEach(() => {
  mockFn = jest.fn();
})

describe('Snapshot tests', () => {
  it('Should capturing snapshot of empty List', () => {
    const items = {};
    const pointsOrder = [];

    const renderedCmp = renderer.create(
      <List items={items} order={pointsOrder} removePoint={mockFn} />
    ).toJSON();
  
    expect(renderedCmp).toMatchSnapshot();
  });

  
  it('Should capturing snapshot of List with Items', () => {
    const renderedCmp = renderer.create(
      <List items={fixtures.points1} order={fixtures.pointsOrder1} removePoint={mockFn} />
    ).toJSON();

    expect(renderedCmp).toMatchSnapshot();
  });
})


describe('Test behavior', () => {
  it('Should call onDrop-function', () => {
    const renderedCmp = mount(
      <List items={fixtures.points3} order={fixtures.pointsOrder3} removePoint={mockFn} />
    );
      
    renderedCmp.find('li').simulate('drop');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });


  it('Should call onDrop-function', () => {
    const renderedCmp = mount(
      <List items={fixtures.points3} order={fixtures.pointsOrder3} removePoint={mockFn} />
    );
      
    renderedCmp.find('li').simulate('drop');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
})
