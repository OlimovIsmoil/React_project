import React from 'react'
import mainStyle from './Main.module.css';

function Main() {
  return (
    <div className={mainStyle.main}>
        <div className={mainStyle.card}><h2>ITEMS</h2></div>
        <div className={mainStyle.card}><h2>ITEMS</h2></div>
        <div className={mainStyle.card}><h2>ITEMS</h2></div>
        <div className={mainStyle.card}><h2>ITEMS</h2></div>
    </div>
  )
}

export default Main;