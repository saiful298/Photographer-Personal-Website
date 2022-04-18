import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <p>Author: Saiful Islam<br /></p>
            <p class="mb-1">&copy; 2020-2022 saiful.pro</p>
            <ul class="list-inline">
                <li class="list-inline-item"><a href="#">Privacy</a></li>
                <li class="list-inline-item"><a href="#">Terms</a></li>
                <li class="list-inline-item"><a href="#">Support</a></li>
            </ul>
        </div>
    );
};

export default Footer;