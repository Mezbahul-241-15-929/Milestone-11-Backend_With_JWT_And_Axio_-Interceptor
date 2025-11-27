import React, { Suspense } from 'react';
import ApplicationsStats from './ApplicationsStats';
import useAuth from '../../hooks/useAuth';
import Applicationlist from './Applicationlist';
import { myApplicationsPromise } from '../../api/application';

// export const myApplicationsPromise = email => {
//     return fetch(`http://localhost:3000/applications?email=${email}`).then(res => res.json());
// }

const Myapplications = () => {

    const { user } = useAuth();
    return (
        <div>
            <ApplicationsStats></ApplicationsStats>
            <Suspense fallback={'Loading application'}>
                <Applicationlist
                myApplicationsPromise={myApplicationsPromise(user.email)}
                >    
                </Applicationlist>
            </Suspense>
        </div>
    );
};

export default Myapplications;