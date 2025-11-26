import React from 'react';
import { useLoaderData } from 'react-router';

const JobDetails = () => {
    const {title} = useLoaderData();
    return (
        <div>
            <h3 className='text-2xl'>Job Name: {title}</h3>
            <button className='btn btn-primary text-center'>Apply Now</button>
        </div>
    );
};

export default JobDetails;