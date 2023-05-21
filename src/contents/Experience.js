import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import WideCard from '../components/WideCard';

import asoiu_logo from '../assets/resources/logos/asoiu_logo.png';
import gub_logo from '../assets/resources/logos/gublogo.jpg';
class Experience extends Component {
    render () {
        return (
            <Container>
                <div className='expedu_section'>
                    <h1 className='pagesubhead'>Work Experience</h1>

                    <WideCard 
                        image={asoiu_logo} 
                        text={[
                            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit luctus posuere. 
                            Nulla nec turpis velit. Nunc eu scelerisque ante.`, <br/>, 
                            `Donec ut tortor nec elit pulvinar suscipit. 
                            Donec tincidunt nunc lacus, a pretium leo pellentesque vitae. Pellentesque habitant morbi 
                            tristique senectus et netus et malesuada fames ac turpi`
                        ]}
                    />
                    <WideCard 
                        image={gub_logo} 
                        text={[
                            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit luctus posuere. 
                            Nulla nec turpis velit. Nunc eu scelerisque ante.`, <br/>, 
                            `Donec ut tortor nec elit pulvinar suscipit. 
                            Donec tincidunt nunc lacus, a pretium leo pellentesque vitae. Pellentesque habitant morbi 
                            tristique senectus et netus et malesuada fames ac turpi`
                        ]}
                    />
                </div>
                <div className='expedu_section mb-0'>
                    <h1 className='pagesubhead'>Education</h1>

                    <h2>Bachelor of IT and System Engineering </h2>
                    <p>ASOIU University  2013 - 2017</p>
                </div>
                <div className='expedu_section mb-0'>


                    <h2>Master of IT and System Engineering  </h2>
                    <p>ASOIU University  2017 - 2019</p>
                </div>
            </Container>
        )
    }
}

export default Experience;