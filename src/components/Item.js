import React from 'react';
import { sortable } from 'react-sortable';
import { createLable } from '../lib';
import '../styles/Item.css';


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
          title="Remove point"
        >
          &times;
        </div>
      </li>
    );
  }
}


export default sortable(Item);
