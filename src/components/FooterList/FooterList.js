import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './FooterList.module.scss';
import { Fragment } from 'react';

const cx = classNames.bind(styles);

function FooterList({ title, items }) {
  return (
    <Fragment>
      <ul className={cx('list')}>
        <p className={cx('title')}>{title}</p>
        {items.map((item, index) => (
          <li key={index} className={cx('item')}>
            <Link to={item.to} className={cx('link')}>
              {item.content}
            </Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default FooterList;
