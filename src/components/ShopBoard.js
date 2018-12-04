import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ShopItem from './ShopItem';

class ShopBoard extends PureComponent {
  state = {}

  componentDidMount() {
    const { listShop } = this.props;
    listShop();
  }

  render() {
    const { shopState: { items }, onBuyItem } = this.props;
    return (
      <div className="ShopBoard">
        {
          items.map(item => (
            <ShopItem
              key={item.id}
              id={item.id}
              name={item.name}
              cost={item.cost}
              onBuyItem={onBuyItem}
            />
          ))
        }
      </div>
    );
  }
}

ShopBoard.propTypes = {
  listShop: PropTypes.func.isRequired,
  shopState: PropTypes.shape().isRequired,
  onBuyItem: PropTypes.func.isRequired
};

export default ShopBoard;
