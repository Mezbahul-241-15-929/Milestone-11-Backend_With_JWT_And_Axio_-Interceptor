import { useEffect, useState } from 'react';
import HotJobCard from './HotJobCard';

const Hotjobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/jobs')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, []);

    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    jobs.map(job => (
                        <HotJobCard key={job._id} job={job} />
                    ))
                }
            </div>
        </div>
    );
};

export default Hotjobs;
