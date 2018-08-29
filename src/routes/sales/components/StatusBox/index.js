import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './StatusBox.css';

class StatusBox extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          {'StatusBox'}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(StatusBox);