import classNames from 'classnames/bind';
import styles from './Banner.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function Banner() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('left')}></div>
      <div className={cx('right')}>
        <div className={cx('container')}>
          <div className={cx('text')}>
            <h1 className={cx('title')}>This is title</h1>
            <p className={cx('content')}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat laboriosam dolor dicta accusamus quasi
              et quidem iusto, at voluptate eos voluptas odio rerum ipsam. Neque earum ab eaque asperiores consectetur.
            </p>
          </div>
          <Button className={cx('button')}>Learn More</Button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
