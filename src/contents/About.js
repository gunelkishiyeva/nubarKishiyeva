import React, { Component } from 'react';

import Skills from '../components/Skills';

class About extends Component {
    render () {
        return (
            <div className="container">
                <h1 className='pagehead'>About me</h1>
                <p>
                    Hey, I'm Nubar!
                </p>
                <p>
                    I'm a passionate OOP principles, Java Lecturer working at  
                    <strong><a target='_blank' rel="noopener noreferrer" href='http://asoiu.edu.az/'> Azerbaijan Oil and Industry University</a></strong>.
                    I have extensive experience working with various front-end technologies and frameworks. 
                </p>
                <p>
                    I am fluent in classic technologies - HTML, CSS, JavaScript, JAVA SE, Github, teaching students with most modern technics.
                </p>
                <p>
                    I am currently taking efforts to develop StratUP organizations.Gain expertise on Project Managment skills. 
                    What you are seeing now is my portfolio developed in React in an attempt to showcase my skills and work experience.
                </p>

                <div className='skills'>
                    <p>My professional skillset include : </p>
                    
                    <div className='d-flex flex-wrap'>
                        <Skills />
                    </div>
                </div>

                <p>
                    In my leisure time I like searching new web technologies. 
                    I enjoy searching and learning new technologoes. {String.fromCodePoint('0x1f60A')}.
                </p>
            </div>
        );
    }
}

export default About;