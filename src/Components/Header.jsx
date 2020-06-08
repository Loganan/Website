import React from 'react';

function Header() {
    return (
        <header>
            <div class="container">
                <div id="branding">
                    <h1><span class="highlight">Logan Walker</span> | Web Developer</h1>
                </div>
                <nav>
                    <ul>
                        <li class="current"><a href="index.html">Home</a></li>
                        <li><a href="#">Page1</a></li>
                        <li><a href="#">Page2</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;