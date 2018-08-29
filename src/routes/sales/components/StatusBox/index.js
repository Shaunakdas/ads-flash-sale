import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './StatusBox.css';

class StatusBox extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.top}>
          </div>
          <div className={s.bottom}>
            <div className={s.statusTitle}>
              {'Proses pengajuan produk'}
            </div>
            <div className={s.statusDescription}>
              {'Pilih produk-produk yang Anda ingin ajukan dalam campaign'}
            </div>
            <div className={s.statusButton}>
              {'Ajukan Produk'}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(StatusBox);