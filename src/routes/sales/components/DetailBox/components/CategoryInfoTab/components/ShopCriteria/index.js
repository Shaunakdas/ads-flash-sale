import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ShopCriteria.css';

class ShopCriteria extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.title}>
            {'KRITERIA TOKO'}
          </div>
          <div className={s.list}>
            <div className={s.item}>
              <div className={s.itemTitle}>
                {'Tipe Toko'}
              </div>
              <div className={s.itemValueList}>
                <div className={s.itemValueOptionHighlighted}>
                  {'Regular Merchant'}
                </div>
                <div className={s.itemValueOptionHighlighted}>
                  {'Gold Merchant'}
                </div>
                <div className={s.itemValueOptionHighlighted}>
                  {'Official Store'}
                </div>
              </div>
            </div>
            <div className={s.item}>
              <div className={s.itemTitle}>
                {'Reputasi Toko'}
              </div>
              <div className={s.itemValueList}>
                <div className={s.itemValueOption}>
                  {'Minimal'}
                </div>
              </div>
            </div>
            <div className={s.item}>
              <div className={s.itemTitle}>
                {'Transaksi Sukses'}
              </div>
              <div className={s.itemValueList}>
                <div className={s.itemValueOption}>
                  {'> 95%'}
                </div>
              </div>
            </div>
            <div className={s.item}>
              <div className={s.itemTitle}>
                {'Dukungan Pengiriman'}
              </div>
              <div className={s.itemValueList}>
                <div className={s.itemValueOptionHighlighted}>
                  {'Go-Send'}
                </div>
                <div className={s.itemValueOptionHighlighted}>
                  {'Grab'}
                </div>
                <div className={s.itemValueOptionHighlighted}>
                  {'Wahana'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ShopCriteria);