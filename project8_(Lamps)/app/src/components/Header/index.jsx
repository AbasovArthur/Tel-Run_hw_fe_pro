import React from 'react'
import { logoSrc, headerIcons } from '../data/data'
import s from './style.module.css'

export default function Header({ src }) {
    return (
        <header>
            <div className={s.header_wrapper}>
                <img className={s.logo} src={logoSrc.src} />
                <div className={s.header_icons}>
                    {
                    headerIcons.map((icon, index) => (
                        <img key={index} src={icon.src} alt={icon.alt} />))
                    }
                </div>
            </div>
        </header>
    )
}

// https://www.shorturl.at/shortener.php
