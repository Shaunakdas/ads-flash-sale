import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './HeaderBox.css';

class HeaderBox extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          {'HeaderBox'}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(HeaderBox);