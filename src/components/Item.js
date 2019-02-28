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

        <button 
          className="close-btn"
          onClick={removePoint(point.id)}
          title={cmpTexts.title}
        >
          &times;
        </button>
      </li>
    );
  }
}


export default sortable(Item);
