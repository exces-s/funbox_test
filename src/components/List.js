import React from 'react';
import Item from './Item';
import './List.css';


export default class List extends React.Component {
  onSortItems = (items) => {
    this.props.updatePointsOrder({ items });
  }

  handleDrop = (e) => e.preventDefault();

  render() {
    const { items, order } = this.props;

    const listItems = order.map((id, i) => {
      return (
        <Item
          key={id}
          onSortItems={this.onSortItems}
          items={order}
          sortId={i}
          point={items[id]}
          removePoint={this.props.removePoint}
          onDrop={this.handleDrop}
        />
      );
    });

    return (
      <ul className='points-block'>
        {listItems}
      </ul>
    )
  }
};
