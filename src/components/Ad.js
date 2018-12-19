import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Ad.css';

class Ad extends PureComponent {
  render() {
    const {
      expiresIn, message,
      probability, reward,
      adId, onSolveAd
    } = this.props;
    return (
      <div className="Ad">
        <div className="Ad__roll Ad__roll--top" />
        <div className="Ad__content">
          <h3>{message}</h3>
          <p className="Ad__expiration">Expires in {expiresIn} turns</p>
          <p className="Ad__probability">Difficulty: {probability}</p>
          <p className="Ad__reward"><span />{reward}</p>
          <button
            type="button"
            onClick={() => onSolveAd(adId)}
          >
            Solve
          </button>
        </div>
        <div className="Ad__roll Ad__roll--bottom" />
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
