import React from 'react';
import Phonemenu from './PhoneMenu';

function Header() {
    document.addEventListener('DOMContentLoaded', function () {
        const links = document.querySelectorAll('a[href^="#"]');

        links.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    });

    return (
        <header className="header">
            <div id='image'>
                <img src="me.jpg" alt='Anush Dcosta' id='myimg'/>
            </div>
            <h1>Anush Dcosta</h1>
            <div id='laptopmenu'>
                <nav>
                    <ul>
                        <li><a href="#about">About Me</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
            <Phonemenu />
        </header>
    );
}

export default Header;
