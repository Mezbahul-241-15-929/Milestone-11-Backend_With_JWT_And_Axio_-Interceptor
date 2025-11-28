import React from 'react';

const Addjob = () => {
    return (
        <div>
            <h2>Add job</h2>

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
                    <input className="btn" type="radio" name="jobType" aria-label="On-Site" />
                    <input className="btn" type="radio" name="jobType" aria-label="Remote" />
                    <input className="btn" type="radio" name="jobType" aria-label="Hybrid" />
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
                <input name='salaryMin' type="text" className="input" placeholder="Minimum Salary" />

                <label className="label">Maximum Salary</label>
                <input name='salaryMax' type="text" className="input" placeholder="Maximum Salary" />

                <label className="label">Currency</label>
                <select name='category' defaultValue="Select a Currency" className="select">
                    <option disabled={true}>Select a Currency</option>
                    <option>BDT</option>
                    <option>USC</option>
                    <option>EU</option>
                </select>

            </fieldset>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Application Deadline</legend>


            </fieldset>

            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                <legend className="fieldset-legend">Application Deadline</legend>


            </fieldset>

        </div>
    );
};

export default Addjob;