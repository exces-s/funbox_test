import React from 'react';
import { sortable } from 'react-sortable';
import { createLable } from '../lib';
import '../styles/Item.css';


class Item extends React.Component {
  render() {
    const { point } = this.props;

    return (
      <li key={point.id} className="point" {...this.props}>
        <div className="text">
          {createLable(point)}
        </div>

        <div 
          className="close-btn"
          onClick={this.props.removePoint(point.id)}
          title="Remove point"
        >
          &times;
        </div>
      </li>
    );
  }
}


export default sortable(Item);
