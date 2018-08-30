import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Description.css';

class Description extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.title}>
            {'DESKRIPSI'}
          </div>
          <div className={s.detail}>
            {"Sprint Sale 25 Desember Natal Ceria! Promo terbaik di hari Natal yang penuh sukacita. Promo berlangsung mulai jam 1 pagi hingga jam 10 malam. Produk terbaik, harga terbaik, dan tentunya bebas ongkir! Hanya di Tokopedia! Sprint Sale 25 Desember Natal Ceria! Promo terbaik di hari Natal yang penuh sukacita. Promo berlangsung mulai jam 1 pagi hingga jam 10 malam. Produk terbaik, harga terbaik"}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Description);