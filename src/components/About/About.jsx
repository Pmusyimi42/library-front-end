import React from "react";
import './about.css';

function About() {
    return (
        <>

    <section class="categories">
        <div class="container categories__container">
            <div class="categories__left">
                <h1>About</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate corporis 
                    cum, possimus tempora nesciunt, nostrum impedit accusantium consequatur 
                    omnis, alias ut nulla quam nam voluptatum esse dolores magnam ex sint!
                </p>
                <a href="#" class="btn">Learn More</a>
            </div>
            <div class="categories__right">
                <article class="category">
                    <span class="category__icon"><i class="uil uil-bitcoin-circle"></i></span>
                    <h5>Blockchain</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, odio.</p>
                </article>

                <article class="category">
                    <span class="category__icon"><i class="uil uil-palette"></i></span>
                    <h5>Graphic design</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, odio.</p>
                </article>

                <article class="category">
                    <span class="category__icon"><i class="uil uil-usd-circle"></i></span>
                    <h5>Finance</h5>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, odio.</p>
                </article>

            </div>
        </div>
    </section>
        </>
    )
}

export default About;