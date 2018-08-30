import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ProductListTab.css';

class ProductListTab extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          {'ProductListTab'}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ProductListTab);