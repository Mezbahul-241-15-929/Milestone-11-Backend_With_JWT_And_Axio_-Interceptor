import React, { Suspense } from 'react';
import ApplicationsStats from './ApplicationsStats';
import useAuth from '../../hooks/useAuth';

const myApplicationsPromise =email=>{
    return fetch(`http://localhost:3000/applications?email=${email}`)
    .then(res=>res.json());
}

const Myapplications = () => {

    const {user} = useAuth();
    return (
        <div>
            <ApplicationsStats></ApplicationsStats>
            <Suspense></Suspense>
        </div>
    );
};

export default Myapplications;