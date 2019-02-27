import React from 'react';
import Item from './Item';
import '../styles/List.css';


export default class List extends React.Component {
  // prevent unexpected FF navigation
  handleDrop = (e) => e.preventDefault();
  
  onSortItems = (items) => this.props.updatePointsOrder({ items });

  render() {
    const { items, order, removePoint } = this.props;

    if (order.length === 0) {
      return null;
    }

    const listItems = order.map((id, i) => {
      return (
        <Item
          key={id}
          onSortItems={this.onSortItems}
          items={order}
          sortId={i}
          point={items[id]}
          removePoint={removePoint}
          onDrop={this.handleDrop}
        />
      );
    });

    return (
      <ul className='points-block'>
        {listItems}
      </ul>
    );
  }
}
