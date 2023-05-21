import React, {Component} from 'react';

import { 
    Container,
    Row,
    Col
} from 'react-bootstrap';

import TypewriterEffect from "react-typewriter-effect";
import AOS from 'aos';

import nubarpic from '../assets/resources/nubarpic.jpg';

import Social from '../components/Social';

import '../assets/scss/home.scss';

class Home extends Component {
    componentDidMount() {
        AOS.init();
    }

    render() {
        return (
            <Container className='homepage'>
                <Row>
                    <Col lg={7} className='order-2 order-sm-1'>
                        <div className='typewriter1'>
                            <TypewriterEffect
                                textStyle={
                                    { fontWeight: 'bold', fontSize: '5rem', marginBottom: '2rem', lineHeight: '1.2' }
                                }
                                startDelay={100}
                                cursorColor="black"
                                text="Hi there, I'm Nubar"
                                typeSpeed={50}
                                hideCursorAfterText={true}
                            />
                        </div>

                        <div className='typewriter2'>
                            <TypewriterEffect
                                textStyle={
                                    { fontWeight: '400', fontSize: '1.2rem', marginBottom: '2rem' }
                                }
                                startDelay={1600}
                                cursorColor="black"
                                text="I'm a Nubar Kishiyeva. 
                                 I have 4 years experience at OOP JAVA SE Lecturer in Azerbaijan State Oil and Industry University. Take deep look to my portfolio."
                                typeSpeed={40}
                                hideCursorAfterText={true}
                            />
                        </div>
                    </Col>
                    <Col className='order-1 order-sm-2'>
                        <div className="imgwrp">
                            <img src={nubarpic} className="img-fluid" alt="nb"/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Social/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;