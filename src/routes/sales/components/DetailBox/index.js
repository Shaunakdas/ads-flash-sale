import React from 'react';
import Tab from 'unify-react-mobile/build/Tab';
import TabContent from 'unify-react-mobile/build/TabContent';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './DetailBox.css';
import ProductListTab from './components/ProductListTab';
import CategoryInfoTab from './components/CategoryInfoTab';

class DetailBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabIndex: 0,
    };
  }
  handleTabChange = (event, item) => {
    const index = item.key;
    this.setState({ activeTabIndex: index });
  };
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
            indexActive={this.state.activeTabIndex}
            onItemClick={this.handleChangeTab}
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
