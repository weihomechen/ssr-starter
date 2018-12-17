import React from 'react';

const Footer = props => {
  const { name } = props;

  return (
    <div className="footer">
      {name}
    </div>
  );
};

export default Footer;
