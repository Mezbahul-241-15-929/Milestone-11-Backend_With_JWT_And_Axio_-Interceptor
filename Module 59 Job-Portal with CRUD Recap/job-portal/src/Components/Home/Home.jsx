import React from 'react';
import Banner from './Banner';
import Hotjobs from './Hotjobs';

const Home = () => {

    const jobsPromise = fetch('http://localhost:3000/jobs').then(res => res.json())
    return (
        <div>
            <Banner></Banner>
            <Hotjobs jobsPromise={jobsPromise}></Hotjobs>
        </div>
    );
};

export default Home;