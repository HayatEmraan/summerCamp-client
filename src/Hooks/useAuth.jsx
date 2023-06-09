import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const useAuth = () => {
    const AuthContextData = useContext(AuthContext);
    return AuthContextData;
};

export default useAuth;