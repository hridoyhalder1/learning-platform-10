import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Register.css';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Register = () => {
    return (
        <div className='form container mt-3 mb-3'>
            <h2>Register Now</h2>
            <Form className=' w-50'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter your full Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <div>
                <h5>Or</h5>
                <ListGroup className=' w-25'>
                    <ListGroup.Item className='mb-3 bg-primary text-white'> <FaGoogle></FaGoogle> Login With Google</ListGroup.Item>
                    <ListGroup.Item className=' bg-black text-white'> <FaGithub></FaGithub> Login With Github</ListGroup.Item>                    
                </ListGroup>
            </div>
        </div>
    );
};

export default Register;