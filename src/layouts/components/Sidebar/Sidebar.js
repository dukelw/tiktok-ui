// import classNames from 'classnames/bind';
// import config from '~/config';

// import styles from './Sidebar.module.scss';
// import { HomeIcon, UserGroupIcon, LiveIcon, HomeActiveIcon, UserGroupActiveIcon, LiveActiveIcon } from '~/components/Icons';
// import Menu, { MenuItem } from './Menu';
// import SuggestedAccounts from '~/components/SuggestedAccounts';

// const cx = classNames.bind(styles);

// function Sidebar() {
//   return (
//     <aside className={cx('wrapper')}>
//       <Menu>
//         <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
//         <MenuItem
//           title="Following"
//           to={config.routes.following}
//           icon={<UserGroupIcon />}
//           activeIcon={<UserGroupActiveIcon />}
//         />
//         <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
//       </Menu>
//       <SuggestedAccounts label="Suggested accounts" />
//       <SuggestedAccounts label="Following accounts" />

//     </aside>
//   );
// }

import Dropdown from './Dropdown';

const Sidebar = () => {
  return (
    <div>
      <Dropdown title="Danh mục" items={['Quần áo nam', 'Giày dép nam', 'Quần áo nữ', 'Nón nữ']} />
      <Dropdown title="Nơi bán" items={['Cửa hàng A', 'Cửa hàng B', 'Cửa hàng C', 'Cửa hàng D']} />
      <Dropdown
        title="Giá tiền"
        items={['Trên 100 000 VND', 'Trên 200 000 VND', 'Trên 300 000 VND', 'Trên 400 000 VND']}
      />
    </div>
  );
};

export default Sidebar;
