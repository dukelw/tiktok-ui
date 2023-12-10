import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import styles from './AccountReview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <img className={cx('avatar')} src="https://cf.shopee.vn/file/bc57602958865f693d66d9dc2494b2ba" alt="Komi" />
        <Button className={cx('follow-btn')} primary>Follow</Button>
      </div>
      <div className={cx('body')}>
        <div className={cx('item-info')}>
          <p className={cx('nickname')}>
            <strong>komishoukocatlyn</strong>
            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
          </p>
          <p className={cx('name')}>Komi Shouko</p>
          <p className={cx('analytics')}>
            <strong className={cx('value')}>8.2M </strong>
            <span className={cx('label')}>Followers</span>
            <strong className={cx('value')}>8.2M </strong>
            <span className={cx('label')}>Likes</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AccountPreview;
