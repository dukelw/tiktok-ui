import classNames from 'classnames/bind';
import React from 'react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './Footer.module.scss';
import { FacebookIcon, LogoIcon, TwitterIcon, InstagramIcon } from '~/components/Icons';
import FooterList from '~/components/FooterList';

const cx = classNames.bind(styles);

const FOOTER_ITEMS = [
  {
    title: 'CHĂM SÓC KHÁCH HÀNG',
    items: [
      {
        to: '',
        content: 'Trung Tâm Trợ Giúp',
      },
      {
        to: '',
        content: 'Hướng Dẫn Mua Hàng',
      },
      {
        to: '',
        content: 'Hướng Dẫn Bán Hàng',
      },
      {
        to: '',
        content: 'Trả Hàng & Hoàn Tiền',
      },
      {
        to: '',
        content: 'Chăm Sóc Khách Hàng',
      },
      {
        to: '',
        content: 'Chính Sách Bảo Hành',
      },
    ],
  },
  {
    title: 'CHĂM SÓC KHÁCH HÀNG',
    items: [
      {
        to: '',
        content: 'Trung Tâm Trợ Giúp',
      },
      {
        to: '',
        content: 'Hướng Dẫn Mua Hàng',
      },
      {
        to: '',
        content: 'Hướng Dẫn Bán Hàng',
      },
      {
        to: '',
        content: 'Trả Hàng & Hoàn Tiền',
      },
      {
        to: '',
        content: 'Chăm Sóc Khách Hàng',
      },
      {
        to: '',
        content: 'Chính Sách Bảo Hành',
      },
    ],
  },
  {
    title: 'CHĂM SÓC KHÁCH HÀNG',
    items: [
      {
        to: '',
        content: 'Trung Tâm Trợ Giúp',
      },
      {
        to: '',
        content: 'Hướng Dẫn Mua Hàng',
      },
      {
        to: '',
        content: 'Hướng Dẫn Bán Hàng',
      },
      {
        to: '',
        content: 'Trả Hàng & Hoàn Tiền',
      },
      {
        to: '',
        content: 'Chăm Sóc Khách Hàng',
      },
      {
        to: '',
        content: 'Chính Sách Bảo Hành',
      },
    ],
  },
];

function Footer() {
  return (
    <footer className={cx('wrapper')}>
      <Container>
        <Row>
          <Col sm={3} xl={3} lg={3} xxl={3}>
            <div className={cx('actions')}>
              <LogoIcon />
              <div className={cx('socials')}>
                <Link to={''}>
                  <FacebookIcon color="ffffff" />
                </Link>
                <Link to={''}>
                  <TwitterIcon color="ffffff" />
                </Link>
                <Link to={''}>
                  <InstagramIcon color="ffffff" />
                </Link>
              </div>
            </div>
          </Col>
          {FOOTER_ITEMS.map((item) => (
            <Col sm={3} xl={3} lg={3} xxl={3}>
              <FooterList title={item.title} items={item.items} />
            </Col>
          ))}
        </Row>
        <div className={cx('spacer')}></div>
        <Row>
          <Col sm={3} xl={3} lg={3} xxl={3}>
            <p className={cx('copyright')}>Copyright @2024, All right reserved</p>
          </Col>
          <Col sm={3} xl={3} lg={3} xxl={3}></Col>
          <Col sm={3} xl={3} lg={3} xxl={3}></Col>
          <Col sm={3} xl={3} lg={3} xxl={3}>
            <p className={cx('copyright')}>Lewis Copporation</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
