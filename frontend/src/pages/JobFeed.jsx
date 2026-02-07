import { useEffect, useState } from "react";
import JobCard from "../components/JobCard.jsx";
import { fetchJobs } from "../services/jobs.js";

const JobFeed = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs().then(setJobs).catch(() => setJobs([]));
  }, []);

  return (
    <section>
      <h2 className="section-title">Nearby jobs</h2>
      {jobs.length === 0 ? (
        <p>No jobs found yet. Try posting the first one!</p>
      ) : (
        <div className="card-grid">
          {jobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      )}
    </section>
  );
};

export default JobFeed;
