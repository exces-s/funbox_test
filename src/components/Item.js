import React from 'react';
import { sortable } from 'react-sortable';
import './Item.css';


class Item extends React.Component {
  render() {
    const { point } = this.props;

    return (
      <li key={point.id} className="point" {...this.props}>
        <div className="text">
          {point.name}
        </div>
        <div className="close-btn" onClick={this.props.removePoint(point.id)}>
          X
        </div>
      </li>
    )
  }
}


export default sortable(Item);
