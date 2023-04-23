import React from 'react';
import { navLinks } from '../data/data';

export default function Intro() {
    return (
        <div>
            <div>
                <nav>
                    {
                        navLinks.map((link, index) => (
                            <a key={index} href={link.href} className="nav-link">{link.text}</a>
                        ))
                    }
                </nav>
                <div>
                    <div>
                        <h1>Светильники</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quas
                            temporibus pariatur numquam facere sequi adipisci rem, vel
                            obcaecati consectetur.
                        </p>
                        <button>Подробнее</button>
                    </div>
                    <img
                        src="https://shorturl.at/ipO39"
                        alt=""
                        className="intro-img"
                    />
                </div>
            </div>
        </div>
    )
}
