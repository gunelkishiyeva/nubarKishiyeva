import React, { Component } from 'react';

import '../assets/scss/social.scss';

class Social extends Component {
    render() {
        return (
            <div className='social'>
                {/* <a href="https://github.com/deshpandem10" target="_blank">
                    <i className='bx bxl-github'></i>
                </a> */}
                <a href="https://www.instagram.com/nubarkishiyeva/" rel="noopener noreferrer" target="_blank">
                    <i className='bx bxl-instagram' ></i>
                </a>
                <a href="https://www.linkedin.com/in/nubar-kishiyeva-820b67267/" rel="noopener noreferrer" target="_blank">
                    <i className='bx bxl-linkedin-square' ></i>
                </a>
            </div>
        )
    }
}

export default Social;