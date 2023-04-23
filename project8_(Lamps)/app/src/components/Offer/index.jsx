import React from 'react'
import { offerCards } from '../data/data';

export default function Offer() {
    return (
        <section className="offer">
            <div className="wrapper offer-wrapper">
                <h1>Актуальные спецпредложения</h1>
                <div className="offer-cards">
                    {
                        offerCards.map((card, index) => (
                            <div key={index} className="card">
                                <img src={card.imgSrc} alt={card.title} />
                                <div className="card-name">
                                    <p>{card.title}</p>
                                    <p className="batton">→</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}
