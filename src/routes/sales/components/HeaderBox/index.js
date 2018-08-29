import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './HeaderBox.css';
import saleIconUrl from './assets/sale-icon.jpg';

class HeaderBox extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.top}>
            <img
            className={s.saleIconUrl}
              src={saleIconUrl}
              alt="React"
            />
            <div className={s.campaignTitleBox}>
              <div className={s.campaignType}>
                {'Sprint Sale'}
              </div>
              <div className={s.campaignTitle}>
                <div className={s.campaignTitleText}>
                  {'Everyday is Payday'}
                </div>
                <div className={s.campaignStatus}>
                  <div className={s.campaignStatusOval} />
                  <div className={s.campaignStatusText}>
                    {'Pembayaran'}
                  </div>
                </div>
              </div>
              
            </div>
            
          </div>
          <div className={s.divider}></div>
          <div className={s.bottom}></div>
          
        </div>
      </div>
    );
  }
}

export default withStyles(s)(HeaderBox);