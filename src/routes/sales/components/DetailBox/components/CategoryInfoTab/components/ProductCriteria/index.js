import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ProductCriteria.css';

class ProductCriteria extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          {'ProductCriteria'}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ProductCriteria);