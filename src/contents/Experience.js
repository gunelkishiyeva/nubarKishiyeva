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
                            `As an experienced lecturer at ASOIU University, I have a strong focus on Object-Oriented Programming (OOP) with expertise in Java SE and Databases. `, <br/>, 
                            ` With a wealth of knowledge and practical experience, I have successfully delivered comprehensive lectures on the fundamentals of OOP, 
                            covering topics using the Java programming language.
                             Additionally, I have guided students in understanding the of MYSQL databases, teaching them essential concepts like database connectivity, SQL queries.`
                        ]}
                    />
                    <WideCard 
                        image={gub_logo} 
                        text={[
                            `As an experienced GUB Startup Mentor, I bring a wealth of knowledge and expertise to guide entrepreneurs through the intricacies of launching and scaling their ventures. With a deep understanding of the startup ecosystem, I offer valuable insights and strategic advice tailored to each founder's unique needs. `, <br/>, 
                            `With a proven track record of successfully mentoring numerous startups, I am dedicated to fueling innovation and driving entrepreneurial success.`
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