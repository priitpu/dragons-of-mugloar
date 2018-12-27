import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import './Ad.css';

class Ad extends Component {
  state = {
    rolledUp: false
  }

  rollUp = () => {
    this.setState({ rolledUp: true });
  }

  render() {
    const {
      expiresIn, message,
      probability, reward,
      adId, onSolveAd
    } = this.props;
    const { rolledUp } = this.state;
    return (
      <Transition
        in={rolledUp === false}
        exit={rolledUp === true}
        timeout={{
          enter: 100,
          exit: 500
        }}
        appear
        onExited={() => onSolveAd(adId)}
      >
        {state => (
          <div className={`Ad Ad--${state}`}>
            <div className="Ad__roll Ad__roll--top" />
            <div className="Ad__content">
              <h3>{message}</h3>
              <p className="Ad__expiration">Expires in {expiresIn} turns</p>
              <p className="Ad__probability">Difficulty: {probability}</p>
              <button
                type="button"
                onClick={() => this.rollUp()}
              >
                Solve <p className="Ad__reward"><span />{reward}</p>
              </button>
            </div>
            <div className="Ad__roll Ad__roll--bottom" />
          </div>
        )}
        
      </Transition>
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
