import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './ProductCard.module.scss';

const cx = classNames.bind(styles);

function ProductCard({ data }) {
  return (
    <Link to={data.name} className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('image')} style={{ backgroundImage: `url(${data.img})` }}></div>
        <div className={cx('text')}>
          <div className={cx('detail')}>
            <div className={cx('left')}>
              <p className={cx('name')}>{data.name}</p>
              <p className={cx('description')}>{data.discription}</p>
              <p className={cx('rating')}>{data.rating}</p>
            </div>
            <div className={cx('right')}>
              <div className={cx('btn-thumb')}>
                <p>+</p>
              </div>
            </div>
          </div>
          <p className={cx('address')}>{data.address}</p>
          <div className={cx('price')}>
            <p className={cx('old-price')}>{data.new_price}</p>
            <p className={cx('new-price')}>{data.old_price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
