import React from 'react';
import './Header.css';

function Header({ headerState, handleHeaderClick }) {
  const headerClass = headerState ? 'header shake' : 'header';

  return (
    <h1 className={headerClass} onClick={handleHeaderClick}>
      Weather in...
    </h1>
  );
}

export default Header;
