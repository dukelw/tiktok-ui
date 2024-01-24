import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header></Header>
      <div className={cx('container')}>
        <Banner></Banner>
        <div className={cx('inner')}>
          <Sidebar></Sidebar>
          <div className={cx('content')}>{children}</div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

DefaultLayout.propTyles = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
