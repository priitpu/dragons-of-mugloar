import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Ad from '../Ad/Ad';
import './AdBoard.css';

class AdBoard extends PureComponent {
  componentDidMount() {
    const { listAds } = this.props;
    listAds();
  }

  render() {
    const { adsState: { ads }, onSolveAd } = this.props;
    return (
      <div className="AdBoard">
        {ads.map(ad => (
          <Ad
            key={ad.adId}
            expiresIn={ad.expiresIn}
            message={ad.message}
            probability={ad.probability}
            reward={ad.reward}
            onSolveAd={onSolveAd}
            adId={ad.adId}
          />
        ))}
      </div>
    );
  }
}

AdBoard.propTypes = {
  adsState: PropTypes.shape().isRequired,
  listAds: PropTypes.func.isRequired,
  onSolveAd: PropTypes.func.isRequired
};

export default AdBoard;
