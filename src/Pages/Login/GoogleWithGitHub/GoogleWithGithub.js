import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import './GoogleWithGithub.css';

const GoogleWithGithub = () => {

    const {providerLogin} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }

    const handleGithub = () => {
        providerLogin(githubProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }

    return (
        <div>
            <ListGroup className=' w-25 '>
                    <ListGroup.Item onClick={handleGoogleSignIn} className='mb-3 bg-primary text-white'> <FaGoogle></FaGoogle> Login With Google</ListGroup.Item>
                    <ListGroup.Item onClick={handleGithub} className=' bg-black text-white'> <FaGithub></FaGithub> Login With Github</ListGroup.Item>                    
                </ListGroup>
        </div>
    );
};

export default GoogleWithGithub;