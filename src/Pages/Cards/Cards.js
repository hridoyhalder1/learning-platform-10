import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftSideCourse from '../LeftSideCourse/LeftSideCourse';
import RightSideCourse from '../RightSideCourse/RightSideCourse';

const Cards = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="5" className=' d-lg-block'>
                        <LeftSideCourse></LeftSideCourse>
                    </Col>
                    <Col lg="7">
                        <RightSideCourse></RightSideCourse>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Cards;