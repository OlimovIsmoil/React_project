import React from 'react'
import headerStyle from './Header.module.css';

function Header() {
  return (
    <div className={headerStyle.header}>
      <div className={headerStyle.item}>Home</div>
      <div className={headerStyle.item}>About Us</div>
      <div className={headerStyle.item}>Blog</div>
      <div className={headerStyle.item}>Service</div>
      <div className={headerStyle.item}>Contacts</div>
    </div>
  )
}

export default Header;