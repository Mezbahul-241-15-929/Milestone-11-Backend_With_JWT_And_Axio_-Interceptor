import React, { Suspense } from 'react';
import useAuth from '../../hooks/useAuth';
import MyPostedJobsList from './MyPostedJobsList';
import { jobsCreatedByPromise } from '../../api/jobsapi';

const MyPostedJobs = () => {
    const {user} =useAuth();
    return (
        
        <div>
            <h2>My Posted Job List</h2>
            <Suspense>
                <MyPostedJobsList jobsCreatedByPromise={jobsCreatedByPromise(user.email)}></MyPostedJobsList>
            </Suspense>
        </div>
    );
};

export default MyPostedJobs;