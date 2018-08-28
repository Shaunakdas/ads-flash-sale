/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.css';
import Link from '../Link';
import parrotUrl from './toko-parrot.png';
import appleUrl from './android-download.png';
import androidUrl from './apple-download.png';

class Footer extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.leftContainer}>
            <img
                src={parrotUrl}
                height="45"
                alt="React"
              />
            <span className={s.text}>© 2009-2018, PT Tokopedia</span>
          </div>
          <div className={s.rightContainer}>
            <a target="_blank" className={s.downloadImg}
            href="https://play.google.com/store/apps/details?id=com.tokopedia.sellerapp" 
            class="gtm" data-event-cat="ta - bottomnav"
            data-event-action="click - google play"
            data-event-label="tokopedia seller app">
              <img
                src={androidUrl}
                width="110"
                alt="React"
              />
            </a>
            <a target="_blank" className={s.downloadImg}
              href="https://itunes.apple.com/us/app/tokopedia/id1001394201?ls=1&amp;mt=8" 
              class="gtm" data-event-cat="ta - bottomnav"
              data-event-action="click - appstore"
              data-event-label="tokopedia ios app">
              <img
                src={appleUrl}
                width="110"
                alt="React"
                />
            </a>
            <Link className={s.link} to="/admin">
              Admin
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
