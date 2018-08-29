import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './DetailBox.css';

class DetailBox extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          {'DetailBox'}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(DetailBox);