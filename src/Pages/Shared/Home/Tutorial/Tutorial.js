import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import edu from '../../../../asstes/Tutorial/edu.png';
import './Tutorial.css';


const Tutorial = () => {
    return (
        <div className=' mt-5'>
            <h2 className=' text-center mb-5'>Features</h2>
            <Container>
                <Row className=' tutorial'>
                    <Col >
                        <img
                            className="d-block w-100 "
                            src={edu}
                            alt="education"
                        />
                    </Col>
                    <Col>
                        <div className=' pt-5 '>
                            <h3>What do you Learn from US!</h3>
                            <p>1.HTML</p>
                            <p>2.CSS</p>
                            <p>3.BOOTSTRAP</p>
                            <p>4.TAILWIND</p>
                            <p>5.JAVASCRIPT</p>
                            <p>6.REACT</p>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Tutorial;