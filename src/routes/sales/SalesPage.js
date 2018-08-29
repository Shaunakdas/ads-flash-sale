
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SalesPage.css';
import DetailBox from './components/DetailBox';
import HeaderBox from './components/HeaderBox';
import StatusBox from './components/StatusBox';

class SalesPage extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <HeaderBox />
          <StatusBox />
          <DetailBox />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(SalesPage);
