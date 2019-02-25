import React from 'react';
import { sortable } from 'react-sortable';
import { createLable } from '../lib';
import texts from '../texts';
import '../styles/Item.css';

const cmpTexts = texts.item;

class Item extends React.Component {
  render() {
    const { point, removePoint, ...rest } = this.props;

    return (
      <li key={point.id} className="point" {...rest}>
        <div className="text">
          {createLable(point)}
        </div>

        <div 
          className="close-btn"
          onClick={removePoint(point.id)}
          title={cmpTexts.title}
        >
          &times;
        </div>
      </li>
    );
  }
}


export default sortable(Item);
