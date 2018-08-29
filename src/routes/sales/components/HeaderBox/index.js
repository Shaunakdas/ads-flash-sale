import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './HeaderBox.css';
import saleIconUrl from './assets/sale-icon.jpg';

class HeaderBox extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.top}>
            <img
            className={s.saleIconUrl}
              src={saleIconUrl}
              alt="React"
            />
            {'HeaderBox'}
          </div>
          <div className={s.divider}></div>
          <div className={s.bottom}></div>
          
        </div>
      </div>
    );
  }
}

export default withStyles(s)(HeaderBox);