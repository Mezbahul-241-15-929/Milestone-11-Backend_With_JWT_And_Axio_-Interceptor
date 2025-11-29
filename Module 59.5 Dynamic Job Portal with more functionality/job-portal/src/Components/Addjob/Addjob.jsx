import React from 'react';
import { Form } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Addjob = () => {

    const { user } = useAuth();


    const handleAddJob = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        //console.log(data);

        //salary range
        const { min, max, currency, ...newJob } = data;
        //console.log(newJob);

        newJob.salaryRange = { min, max, currency };
        //console.log(newJob);

        //process requirements
        const reqString = newJob.requirements;
        //console.log(reqString); //html, css, javascript
        const reqD = reqString.split(',')
        //console.log(reqD); //['html', ' css', ' javascript']
        const reqC = reqD.map(req => req.trim()); //['html', 'css', 'javascript']
        newJob.requirements = reqC;


        //responsibilities
        newJob.responsibilities = newJob.responsibilities.split(',').map(res => res.trim());
        console.log(newJob)




    }


    return (
        <div className='flex flex-col justify-center items-center mt-5'>
            <h2>ADD JOBS FROM</h2>

            <Form onSubmit={handleAddJob}>

                {/* Page details */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Page details</legend>

                    <label className="label">Title</label>
                    <input name='title' type="text" className="input" placeholder="Job Title" />

                    <label className="label">Company</label>
                    <input name='compnay' type="text" className="input" placeholder="Company name" />

                    <label className="label">Location</label>
                    <input name='location' type="text" className="input" placeholder="Company Location" />

                    <label className="label">Company logo</label>
                    <input name='company_logo' type="text" className="input" placeholder="Company logo URL" />

                </fieldset>

                {/* Job Type */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Type</legend>

                    <div className="filter">
                        <input className="btn filter-reset" type="radio" name="jobType" aria-label="All" />
                        <input className="btn" type="radio" name="jobType" aria-label="On-Site" value="On-Site" />
                        <input className="btn" type="radio" name="jobType" aria-label="Remote" value="Remote" />
                        <input className="btn" type="radio" name="jobType" aria-label="Hybrid" value="Hybrid" />
                    </div>


                </fieldset>

                {/* Job Category */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Category</legend>

                    <select name='category' defaultValue="Pick a color" className="select">
                        <option disabled={true}>Job Category</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                    </select>


                </fieldset>

                {/* Application Deadline */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Application Deadline</legend>

                    <input type="date" className="input" />


                </fieldset>

                {/* Salary Range */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Salary Range</legend>

                    <label className="label">Minimum Salary</label>
                    <input name='min' type="text" className="input" placeholder="Minimum Salary" />

                    <label className="label">Maximum Salary</label>
                    <input name='max' type="text" className="input" placeholder="Maximum Salary" />

                    <label className="label">Currency</label>
                    <select name='currency' defaultValue="Select a Currency" className="select">
                        <option disabled={true}>Select a Currency</option>
                        <option>BDT</option>
                        <option>USC</option>
                        <option>EU</option>
                    </select>

                </fieldset>

                {/* Job Description */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Description</legend>

                    <textarea name='description' className="textarea" placeholder="Description"></textarea>
                </fieldset>

                {/* Job Requirement */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Requirement</legend>

                    <textarea name='requirements' className="textarea" placeholder="Requirements (separate by comma)"></textarea>

                </fieldset>


                {/* Job Responsibilities */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">Job Responsibilities</legend>

                    <textarea name='responsibilities' className="textarea" placeholder="Responsibilities (separate by comma)"></textarea>

                </fieldset>

                {/* HR related Info */}
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend">HR related Info</legend>

                    <label className="label">HR Name</label>
                    <input name='hr_name' type="text" className="input" placeholder="HR Name" />

                    <label className="label">HR Email</label>
                    <input name='hr_email' defaultValue={user.email} type="email" className="input" placeholder="HR Email" />

                </fieldset>

                <input type="submit" name="" id="" className='btn' value="Add Job" />

            </Form>

        </div>
    );
};

export default Addjob;