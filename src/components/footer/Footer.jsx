import React from 'react'
import footerStyle from './Footer.module.css';

function Footer() {
    return (
        <div className={footerStyle.footer}>
            <form className={footerStyle.form}>
                <input placeholder="Enter your name" className={footerStyle.input} type="text"></input>
                <input placeholder="Enter your email" className={footerStyle.input} type="text"></input>
                <input placeholder="*********" class="input" type="password"></input>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default Footer;