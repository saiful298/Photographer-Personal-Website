import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../../firebase.init';
import Services from '../Services/Services';
import './Home.css'

const auth = getAuth(app);
const Home = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='bg'>
            <Services></Services>
        </div>
    );
};

export default Home;