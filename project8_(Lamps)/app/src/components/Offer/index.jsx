import React from 'react'

export default function Offer() {
    return (
        <div>
            <div class="wrapper offer-wrapper">
                <h1>Актуальные спецпредложения</h1>
                <div class="offer-cards">
                    <div class="card">
                        <img src="./images/lamps_decor.jpg" alt="" />
                        <div class="card-name">
                            <p>Светильники для дома</p>
                            <p class="batton">→</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="./images/lamps_konstr.jpg" alt="" />
                        <div class="card-name">
                            <p>Оборудование профессионалов</p>
                            <p class="batton">→</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="./images/lamps_funny.jpg" alt="" />
                        <div class="card-name">
                            <p>Декоративные светильники</p>
                            <p class="batton">→</p>
                        </div>
                    </div>
                    <div class="card">
                        <img src="./images/lamps_tech.jpg" alt="" />
                        <div class="card-name">
                            <p>Промышленные светильники</p>
                            <p class="batton">→</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
