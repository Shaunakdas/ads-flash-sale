import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './TermsList.css';

class TermsList extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.title}>
            {'Syarat & Kententuan'}
          </div>
          <div className={s.detail}>
            {"1. Merchant harus mendaftarkan produk pada kategori yang sesuai."}
          </div>
          <div className={s.detail}>
            {"2. Untuk mengikuti Promo Sprint Sale, Merchant harus memberikan harga diskon yang telah ditentukan oleh Tokopedia."}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(TermsList);