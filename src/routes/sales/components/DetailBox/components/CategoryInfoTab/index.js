import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CategoryInfoTab.css';
import Description from './components/Description';
import ProductCriteria from './components/ProductCriteria';
import PromoInfo from './components/PromoInfo';
import ShopCriteria from './components/ShopCriteria';
import TermsList from './components/TermsList';

class CategoryInfoTab extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.row}>
            <Description/>
            <PromoInfo/>
          </div>
          <div className={s.row}>
            <ShopCriteria />
          </div>
          <div className={s.row}>
            <ProductCriteria />
          </div>
          <div className={s.row}>
            <TermsList />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(CategoryInfoTab);