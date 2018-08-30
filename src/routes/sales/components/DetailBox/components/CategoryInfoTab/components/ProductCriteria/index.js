import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ProductCriteria.css';

class ProductCriteria extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.title}>
            {'KRITERIA PRODUK'}
          </div>
          <div className={s.item}>
            <div className={s.productTitle}>
              {'Komputer & Aksesoris'}
            </div>
            <div className={s.productAttributeList}>
              <div className={s.productAttribute}>
                <div className={s.productAttributeTop}>
                  {'Kisaran Harga Final'}
                </div>
                <div className={s.productAttributeBottom}>
                  {'Rp10.000 - Rp2.000.000'}
                </div>
              </div>
              <div className={s.productAttribute}>
                <div className={s.productAttributeTop}>
                  {'Diskon'}
                </div>
                <div className={s.productAttributeBottom}>
                  {'5% - 50%'}
                </div>
              </div>
              <div className={s.productAttribute}>
                <div className={s.productAttributeTop}>
                  {'Rating'}
                </div>
                <div className={s.productAttributeBottom}>
                  {'0.5 - 5'}
                </div>
              </div>
              <div className={s.productAttribute}>
                <div className={s.productAttributeTop}>
                  {'Min. Cashback'}
                </div>
                <div className={s.productAttributeBottom}>
                  {'0%'}
                </div>
              </div>
              <div className={s.productAttribute}>
                <div className={s.productAttributeTop}>
                  {'Min. Stock'}
                </div>
                <div className={s.productAttributeBottom}>
                  {'15'}
                </div>
              </div>
              <div className={s.productAttribute}>
                <div className={s.productAttributeTop}>
                  {'Max. Pengajuan'}
                </div>
                <div className={s.productAttributeBottom}>
                  {'2 produk'}
                </div>
              </div>
              <div className={s.productAttribute}>
                <div className={s.productAttributeTop}>
                  {'Catatan Lainnya'}
                </div>
                <div className={s.productAttributeBottom}>
                  {'Tidak PreOrder'}
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ProductCriteria);