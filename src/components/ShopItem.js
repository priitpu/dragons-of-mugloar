import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './ShopItem.css';

class ShopItem extends PureComponent {
  render() {
    const {
      id, name,
      cost, onBuyItem
    } = this.props;
    return (
      <div className="ShopItem">
        <h3>{name}</h3>
        <div className="ShopItem__buy">
          <div className="ShopItem__price">
            <span />{cost}
          </div>
          <button
            type="button"
            onClick={() => onBuyItem(id)}
          >
            BUY
          </button>
        </div>
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
