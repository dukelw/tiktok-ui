import classNames from 'classnames/bind';
import React from 'react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'tippy.js/dist/tippy.css';
import styles from './ProductContainer.module.scss';
import ProductCard from '../ProductCard';
import { FilterIcon, SortIcon } from '~/components/Icons';
import Search from '~/layouts/components/Search';

const cx = classNames.bind(styles);

function ProductContainer({ data }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('tools')}>
        <p className={cx('status')}>1 of 10 pages</p>
        <div className={cx('actions')}>
          {/* Filter */}
          <div className={cx('filter')}>
            <p>Filter</p>
            <div className={cx('action-btn')}>
              <FilterIcon />
            </div>
          </div>
          {/* Sort */}
          <div className={cx('sort')}>
            <p>Sort by</p>
            <div className={cx('action-btn')}>
              <SortIcon />
            </div>
            <Search />
          </div>
          {/* Search */}
        </div>
      </div>
      <Container>
        <Row>
          {data.map((item, index) => {
            return (
              <Col key={index} sm={6} xl={2} lg={2}>
                <ProductCard data={item}></ProductCard>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default ProductContainer;
