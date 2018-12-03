import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Ad extends PureComponent {
  render() {
    const {
      expiresIn, message,
      probability, reward,
      adId, onSolveAd
    } = this.props;
    return (
      <div className="Ad">
        <p>{message}</p>
        <p>{expiresIn}</p>
        <p>{probability}</p>
        <p>{reward}</p>
        <button
          type="button"
          onClick={() => onSolveAd(adId)}
        >
          Solve
        </button>
      </div>
    );
  }
}

Ad.propTypes = {
  expiresIn: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  probability: PropTypes.string.isRequired,
  reward: PropTypes.number.isRequired,
  onSolveAd: PropTypes.func.isRequired,
  adId: PropTypes.string.isRequired
};

export default Ad;
