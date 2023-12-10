import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import AccountPreview from './AccountReview/AccountReview';
import { Wrapper as PopperWrapper } from '../Popper';
import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  const renderReview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview />
        </PopperWrapper>
      </div>
    );
  };

  return (
    <div>
      <Tippy interactive delay={[800, 0]} offset={[-20, 0]} placement="bottom" render={renderReview}>
        <div className={cx('account-item')}>
          <img className={cx('avatar')} src="https://cf.shopee.vn/file/bc57602958865f693d66d9dc2494b2ba" alt="Komi" />
          <div className={cx('item-info')}>
            <p className={cx('nickname')}>
              <strong>komishoukocatlyn</strong>
              <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
            </p>
            <p className={cx('name')}>Komi Shouko</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

export default AccountItem;
