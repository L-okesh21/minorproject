import { Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import JobFeed from "./pages/JobFeed.jsx";
import PostJob from "./pages/PostJob.jsx";
import Auth from "./pages/Auth.jsx";

const App = () => (
  <div className="app">
    <header className="app-header">
      <div>
        <p className="badge">Location-first matching</p>
        <h1 className="app-title">Local Skill Match</h1>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/post">Post a Job</Link>
        <Link to="/auth">Login</Link>
      </nav>
    </header>
    <main className="main">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/jobs" element={<JobFeed />} />
        <Route path="/post" element={<PostJob />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </main>
  </div>
);

export default App;
