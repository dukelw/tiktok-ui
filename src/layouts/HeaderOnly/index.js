import PropTypes from 'prop-types';
import Header from '../components/Header';

function HeaderOnly({ children }) {
  return (
    <div>
      <Header />
      <div className="container">{children}</div>
    </div>
  );
}

HeaderOnly.propTyles = {
  children: PropTypes.node.isRequired
}

export default HeaderOnly;
