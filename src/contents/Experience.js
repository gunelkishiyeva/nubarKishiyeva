import React, { Component } from 'react';

import { Container } from 'react-bootstrap';

import WideCard from '../components/WideCard';

import asoiu_logo from '../assets/resources/logos/precise_logo.png';

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
                    {/* <WideCard 
                        image={inaxus_logo} 
                        text={[
                            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit luctus posuere. 
                            Nulla nec turpis velit. Nunc eu scelerisque ante.`, <br/>, 
                            `Donec ut tortor nec elit pulvinar suscipit. 
                            Donec tincidunt nunc lacus, a pretium leo pellentesque vitae. Pellentesque habitant morbi 
                            tristique senectus et netus et malesuada fames ac turpi`
                        ]}
                    />
                    <WideCard 
                        image={cloudchain_logo} 
                        text={[
                            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit luctus posuere. 
                            Nulla nec turpis velit. Nunc eu scelerisque ante.`, <br/>, 
                            `Donec ut tortor nec elit pulvinar suscipit. 
                            Donec tincidunt nunc lacus, a pretium leo pellentesque vitae. Pellentesque habitant morbi 
                            tristique senectus et netus et malesuada fames ac turpi`
                        ]}
                    />
                    <WideCard 
                        image={kpit_logo} 
                        text={[
                            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce suscipit luctus posuere. 
                            Nulla nec turpis velit. Nunc eu scelerisque ante.`, <br/>, 
                            `Donec ut tortor nec elit pulvinar suscipit. 
                            Donec tincidunt nunc lacus, a pretium leo pellentesque vitae. Pellentesque habitant morbi 
                            tristique senectus et netus et malesuada fames ac turpi`
                        ]}
                    /> */}
                </div>
                <div className='expedu_section mb-0'>
                    <h1 className='pagesubhead'>Education</h1>

                    <h2>Bachelor of Iformation Technologies (Electronics)</h2>
                    <p>ASOIU University -- 2013 - 2017</p>
                </div>
                <div className='expedu_section mb-0'>
                    <h1 className='pagesubhead'>Education</h1>

                    <h2>Master of Iformation Technologies (Electronics)</h2>
                    <p>ASOIU University -- 2017 - 2019</p>
                </div>
            </Container>
        )
    }
}

export default Experience;