import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

Nav.propTypes = {
  title: PropTypes.any,
  border: PropTypes.bool,
  leftButtons: PropTypes.arrayOf(PropTypes.element),
  rightButtons: PropTypes.arrayOf(PropTypes.element)
}

Nav.defaultProps = {
  border: true,
  leftButtons: [],
  rightButtons: []
}

function Nav (props) {
  const {
    leftButtons,
    rightButtons,
    border,
    title,
    ...rest
  } = props;

  return (
    <div className="nav-container">
      <div className="nav-buttons left">
        {leftButtons}
      </div>

      <div className="nav-title">
        {typeof title === 'string'
          ? <span>{title}</span>
          : title
        }
      </div>

      <div className="nav-buttons right">
        {rightButtons}
      </div>
    </div>
  );
}

export default Nav;