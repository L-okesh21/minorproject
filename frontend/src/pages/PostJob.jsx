import { useState } from "react";
import { createJob } from "../services/jobs.js";

const PostJob = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    skillsRequired: "",
    budget: ""
  });
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createJob({
        title: form.title,
        description: form.description,
        skillsRequired: form.skillsRequired.split(",").map((skill) => skill.trim()),
        budget: Number(form.budget)
      });
      setMessage("Job posted successfully.");
      setForm({ title: "", description: "", skillsRequired: "", budget: "" });
    } catch (error) {
      setMessage("Please sign in before posting a job.");
    }
  };

  return (
    <section>
      <h2 className="section-title">Post a local job</h2>
      <form onSubmit={handleSubmit} className="form card">
        <input
          name="title"
          placeholder="Job title"
          value={form.title}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Describe the task"
          rows={4}
          value={form.description}
          onChange={handleChange}
        />
        <input
          name="skillsRequired"
          placeholder="Skills (comma separated)"
          value={form.skillsRequired}
          onChange={handleChange}
        />
        <input
          name="budget"
          type="number"
          placeholder="Budget"
          value={form.budget}
          onChange={handleChange}
        />
        <button type="submit">Publish job</button>
      </form>
      {message && <p>{message}</p>}
    </section>
  );
};

export default PostJob;
