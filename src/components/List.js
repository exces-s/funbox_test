import React from 'react';
import Item from './Item';
import './List.css';


export default class List extends React.Component {
  onSortItems = (items) => {
    this.props.updatePointsOrder({ items });
  }

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
