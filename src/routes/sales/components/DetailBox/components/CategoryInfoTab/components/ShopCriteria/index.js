import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ShopCriteria.css';

class ShopCriteria extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          {'ShopCriteria'}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ShopCriteria);