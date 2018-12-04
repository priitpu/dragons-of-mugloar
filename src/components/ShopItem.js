import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ShopItem extends PureComponent {
  render() {
    const {
      id, name,
      cost, onBuyItem
    } = this.props;
    return (
      <div className="ShopItem">
        <h3>{name}</h3>
        <p>{cost}</p>
        <button
          type="button"
          onClick={() => onBuyItem(id)}
        >
          BUY
        </button>
      </div>
    );
  }
}

ShopItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onBuyItem: PropTypes.func.isRequired,
  cost: PropTypes.number.isRequired
};

export default ShopItem;
