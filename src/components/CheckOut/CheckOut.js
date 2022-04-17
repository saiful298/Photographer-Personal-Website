import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app);
const CheckOut = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h2> CheckOut Page</h2>
            <p>{user ? user.displayName : 'No Body'}</p>
        </div>
    );
};

export default CheckOut;