import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ProductListTab.css';
import ProductRow from './components/ProductRow';

class ProductListTab extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.headerRow}>
            <div className={s.submitSelectorList}>
              <div className={s.submitSelector}>
                <div className={s.submitSelectorText}>
                  {'Diajukan'}
                </div>
              </div>
              <div className={s.submitSelector}>
                <div className={s.submitSelectorText}>
                  {'Belum Diajukan'}
                </div>
              </div>
            </div>
            <div className={s.filterComponentList}>
              <div className={s.categoryTitle}>
                {'Kategori:'}
              </div>
              <div className={s.categoryFilter}>
                <div className={s.categoryFilterText}>
                  {'Semua Kategori'}
                </div>
              </div>
              <div className={s.searchBox}>
                <div className={s.searchBoxText}>
                  {'Cari'}
                  </div>
              </div>
            </div>
          </div>
          <ProductRow />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ProductListTab);