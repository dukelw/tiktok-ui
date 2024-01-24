import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignIn, faList } from '@fortawesome/free-solid-svg-icons';
import React, { Fragment } from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import config from '~/config';
import Image from '~/components/Image';
import Menu from '~/components/Popper/Menu';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import {
  LogoIcon,
  ListIcon,
  // UploadIcon,
  FavouriteIcon,
  CartIcon,
  ProfileIcon,
  SettingsIcon,
  LogoutIcon,
  HelpIcon,
  ShortcutsIcon,
  LanguageIcon,
  CoinIcon,
  InboxIcon,
  NotificationIcon,
} from '~/components/Icons';
import Search from '../Search';

const cx = classNames.bind(styles);

const NAVIGATION_ITEMS = [
  {
    title: 'Best sellers',
    to: '/best-seller',
  },
  {
    title: 'New releases',
    to: '/new-releases',
  },
  {
    title: "Today's deals",
    to: '/deals',
  },
  {
    title: 'Products',
    to: '/products',
  },
  {
    title: 'Discount codes',
    to: '/discount-codes',
  },
  {
    title: 'Customer services',
    to: '/customer services',
  },
];

const MENU_ITEMS = [
  {
    icon: <LanguageIcon />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <HelpIcon />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <ShortcutsIcon />,
    title: 'Keyboard shortcut',
  },
];

function Header() {
  const currentUser = true;

  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
  };

  const userMenu = [
    {
      icon: <ProfileIcon />,
      title: 'View profile',
      to: '/@nva',
    },
    {
      icon: <CoinIcon />,
      title: 'Get coins',
      to: '/coin',
    },
    {
      icon: <SettingsIcon />,
      title: 'Setting',
      to: '/settings',
    },
    ...MENU_ITEMS,
    {
      icon: <LogoutIcon />,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
  ];

  return (
    <header className={cx('wrapper')}>
      {/* Logo */}
      <Link to={config.routes.home} className={cx('logo-link')}>
        <div className={cx('logo')}>
          <LogoIcon />
        </div>
      </Link>
      {/* Navigation */}
      <div className={cx('inner')}>
        <button className={cx('action-btn')}>
          <ListIcon /> <p className={cx('navigation-item')}>All</p>
        </button>
        <Search />
        <ul className={cx('navigation-list')}>
          {NAVIGATION_ITEMS.map((item, index) => {
            return (
              <li key={index} className={cx('navigation-item')}>
                <Link to={item.to} className={cx('navigation-link')}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className={cx('actions')}>
          {currentUser ? (
            <Fragment>
              <div className={cx('current-user')}>
                <Tippy content="Cart" placement="bottom" trigger="click" delay={[0, 200]}>
                  <button className={cx('action-btn')}>
                    <CartIcon />
                  </button>
                </Tippy>
                <Tippy content="Favourite" placement="bottom" trigger="click" delay={[0, 200]}>
                  <button className={cx('action-btn')}>
                    <FavouriteIcon />
                  </button>
                </Tippy>
                <Tippy content="Notification" placement="bottom" trigger="click" delay={[0, 200]}>
                  <button className={cx('action-btn')}>
                    <NotificationIcon />
                  </button>
                </Tippy>
              </div>
            </Fragment>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                Log in
              </Button>
            </>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                className={cx('user-avatar')}
                src="https://i.pinimg.com/originals/ac/0b/3b/ac0b3b4f2f7c1a89e045b2f186d6f7e1.jpg"
                alt="Nguyen Van A"
                fallback="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5577ddc3-7a38-4931-8d27-eba1cd94be70/dewdki6-8b9dfaa0-3980-42cb-882c-87abd7cc21b7.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU1NzdkZGMzLTdhMzgtNDkzMS04ZDI3LWViYTFjZDk0YmU3MFwvZGV3ZGtpNi04YjlkZmFhMC0zOTgwLTQyY2ItODgyYy04N2FiZDdjYzIxYjcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.cRkFHWQdZOmHE3GJuwFIeMyRc6tloD_NVkow2hKLHs4"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faList} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
