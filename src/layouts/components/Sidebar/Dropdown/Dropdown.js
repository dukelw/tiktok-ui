import classNames from 'classnames/bind';
import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import styles from './Dropdown.module.scss';

const Dropdown = ({ title, items }) => {
  const cx = classNames.bind(styles);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const { height, opacity } = useSpring({
    from: { height: 0, opacity: 0 },
    to: { height: isOpen ? items.length * 44 : 0, opacity: isOpen ? 1 : 0 },
  });

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div className={cx('wrapper')}>
      <div
        className={cx('inner')}
        onClick={() => setIsOpen(!isOpen)}
        style={{ cursor: 'pointer', borderBottom: '1px solid #ccc', padding: '10px' }}
      >
        <p className={cx('list')}>{selectedItem || title}</p>
      </div>
      <animated.div className={cx('container')} style={{ overflow: 'hidden', height, opacity, listStyle: 'none' }}>
        {items.map((item) => (
          <li
            className={cx('item', { active: item === selectedItem })}
            key={item}
            style={{ padding: '10px' }}
            onClick={() => handleItemClick(item)}
          >
            {item}
          </li>
        ))}
      </animated.div>
    </div>
  );
};

export default Dropdown;
