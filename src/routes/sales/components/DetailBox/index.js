import React from 'react';
import Tab from 'unify-react-mobile/build/Tab';
import TabContent from 'unify-react-mobile/build/TabContent';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './DetailBox.css';
import ProductListTab from './components/ProductListTab';
import CategoryInfoTab from './components/CategoryInfoTab';

class DetailBox extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Tab
            secondary
            items={[
              { key: 0, text: 'Deskripsi & Kriteria' },
              { key: 1, text: 'Daftar Produk' },
            ]}
            indexActive={0}
          >
            <TabContent>
              <CategoryInfoTab />
            </TabContent>
            <TabContent>
              <ProductListTab />
            </TabContent>
          </Tab>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(DetailBox);
