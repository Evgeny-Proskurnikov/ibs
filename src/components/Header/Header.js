import React from 'react';
import './Header.css';

function Header({ headerState, handleHeaderClick }) {
  const headerClass = headerState ? 'page__header shake' : 'page__header';

  return (
    <h1 className={headerClass} onClick={handleHeaderClick}>
      Wheather in...
    </h1>
  );
}

export default Header;
