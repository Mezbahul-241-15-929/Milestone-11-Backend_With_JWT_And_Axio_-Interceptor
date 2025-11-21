import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const googleProvider = new GoogleAuthProvider();



const AuthProvider = ({ children }) => {

    const [loading ,setLoading]= useState(true);

    const [user,setUser] = useState(null)
      

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //singin with google
        const singInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const signOutUser= ()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe  = onAuthStateChanged(auth,curretnUser=>{
        setUser(curretnUser);
        setLoading(false);
        console.log('user in the auth state change',curretnUser)
        })
        return ()=>{
            unSubscribe();
        }
    },[])

    const userInfo = {
        loading,
        user,
        createUser, 
        signInUser,
        singInWithGoogle,
        signOutUser,
        
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;