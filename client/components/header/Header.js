

import React from 'react';
import PropTypes from 'prop-types';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: 'header',
  };

  render() {
    const {
      className: cn,
    } = this.props;

    return (
      <div className={cn}>
        header
      </div>
    );
  }
}
