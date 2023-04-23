import React from 'react'
import { footerIcons } from '../data/data';

export default function Footer() {
    return (
        <footer>
            <div className="footer-icons">
                {
                    footerIcons.map((icon, index) => (
                        <img key={index} src={icon.src} alt={icon.alt} />
                    ))
                }
            </div>
        </footer>
    );
}
