import React from 'react';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const { _id, title } = useLoaderData();
    return (
        <div>
            <h3 className='text-2xl'>Job Name: {title}</h3>
            <Link to={`/jobApply/${_id}`}>
                <button className='btn btn-primary text-center'>Apply Now</button>
            </Link>
        </div>
    );
};

export default JobDetails;