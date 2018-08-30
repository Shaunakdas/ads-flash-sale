import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './PromoInfo.css';

class PromoInfo extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.title}>
            {'INFO PROMO'}
          </div>
          <div className={s.contentBox}>
            <div className={s.leftContent}>
              <div className={s.itemTitle}>
                {'Minimum Transaksi'}
              </div>
              <div className={s.itemValue}>
                {'Rp70.000'}
              </div>
            </div>
            <div className={s.divider}>

            </div>
            <div className={s.rightContent}>
              <div className={s.itemTitle}>
                {'Kode Promo'}
              </div>
              <div className={s.itemValue}>
                {'BEBASONGKIR'}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default withStyles(s)(PromoInfo);