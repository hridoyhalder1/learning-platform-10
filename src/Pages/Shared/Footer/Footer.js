import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className=' bg-black p-5 mt-5 text-center'>
            <p className=' text-white'>All rights reserved by CodeScripts @ 2022 </p>
            <div>
                <span className=' me-3 '><FaFacebook></FaFacebook></span>
                <span className=' me-3'><FaLinkedinIn></FaLinkedinIn></span>
                <span className=' me-3'><FaInstagram></FaInstagram></span>
            </div>
        </div>
    );
};

export default Footer;