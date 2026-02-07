const JobCard = ({ job }) => (
  <article className="card">
    <h3>{job.title}</h3>
    <p>{job.description}</p>
    <p>
      <strong>Budget:</strong> ₹{job.budget}
    </p>
    <p>
      <strong>Skills:</strong> {job.skillsRequired?.join(", ") || "Not specified"}
    </p>
    <p>
      <strong>Posted by:</strong> {job.postedBy?.name || "Local hirer"}
    </p>
  </article>
);

export default JobCard;
