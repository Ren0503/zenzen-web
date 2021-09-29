import React, { useState} from 'react';
import Login from 'screens/Auth/Login';
import Signup from 'screens/Auth/SignUp';

const AuthRoutes = () => {
    const [auth, setAuth] = useState('LOGIN');

    if (auth === 'SIGNUP') {
        return <Signup setAuth={setAuth} />
    } else {
        return <Login setAuth={setAuth} />
    }
};

export default AuthRoutes;