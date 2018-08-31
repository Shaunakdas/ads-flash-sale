import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ProductRow.css';

class ProductRow extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.mainImage}>
            {'IMAGE'}
          </div>
          <div className={s.detailCell}>
            <div className={s.title}>
              {"Komputer & Aksesoris"}
            </div>
            <div className={s.detailRow}>
              <div className={s.detail}>
                {"BOLT Home Router BL100 HELIOS Black"}
              </div>
              <div className={s.detail}>
                {"Rp 999.000"}
              </div>
              <div className={s.detailItem}>
                
                <div className={s.detail}>
                  {"Rp "}
                </div>
              </div>
              <div className={s.detail}>
                {"10%"}
              </div>
              <div className={s.detail}>
                {"15"}
              </div>
              <div className={s.detail}>
                {"0 %"}
              </div>
              <div className={s.statusButton}>
                {"Ajukan"}
              </div>
            </div>
            <div className={s.star}>
              {"5 stars"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ProductRow);