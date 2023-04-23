import React from 'react'

export default function Intro() {
    return (
        <div>
            <div class="wrapper intro-wrapper">
                <nav class="intro-nav">
                    <a href="#" class="nav-link">Светильники</a>
                    <a href="#" class="nav-link">Лампочки</a>
                    <a href="#" class="nav-link">Декоративные</a>
                    <a href="#" class="nav-link">Профессионаьные</a>
                    <a href="#" class="nav-link">Контакты</a>
                    <a href="tel: +380955555555" class="nav-link">Связаться</a>
                </nav>
                <div class="intro-info">
                    <div class="intro-text">
                        <h1 class="intro-title">Светильники</h1>
                        <p class="intro-descr">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quas
                            temporibus pariatur numquam facere sequi adipisci rem, vel
                            obcaecati consectetur.
                        </p>
                        <button class="intro-btn">Подробнее</button>
                    </div>
                    <img
                        src="https://www.indiajane.co.uk/pub/media/catalog/category/L128300-6.jpg"
                        alt=""
                        class="intro-img"
                    />
                </div>
            </div>
        </div>
    )
}
