# Location-Based Local Skill & Work Matching Platform

## Project Overview
This project delivers a location-driven platform that connects local job providers and skilled workers for short, urgent, or nearby tasks. The solution focuses on simplicity, proximity-based matching, and trust, using React.js for the client, Node.js/Express.js for the API, MongoDB for persistence, JWT for authentication, and Google Maps APIs for geocoding and distance logic.

## Folder Overview
```
minorproject/
├── backend/
│   ├── package.json
│   └── src/
│       ├── config/         # Environment configuration
│       ├── controllers/    # Request handlers
│       ├── middleware/     # Auth & validation middleware
│       ├── models/         # MongoDB schemas
│       ├── routes/         # API routes
│       ├── services/       # Integrations (e.g., Google Maps)
│       └── server.js       # Express app entry
├── frontend/
│   ├── package.json
│   └── src/
│       ├── components/     # Reusable UI components
│       ├── pages/          # Page-level screens
│       ├── services/       # API helpers
│       ├── App.jsx         # App root
│       └── main.jsx        # React entry
└── README.md
```

## Step-by-Step Implementation Guide
1. **Initialize the repository**
   - Create `backend` and `frontend` folders and initialize separate `package.json` files.

2. **Build the backend API (Node.js + Express.js)**
   - Configure Express and middleware (JSON parsing, CORS).
   - Connect MongoDB with Mongoose.
   - Add JWT authentication routes (register/login).
   - Create models for users, jobs, and ratings.
   - Add job posting, job search, and worker matching endpoints.
   - Integrate Google Maps Geocoding or Distance Matrix API in a service.

3. **Build the frontend (React.js)**
   - Set up pages: landing, login/register, job feed, worker profile, post job.
   - Create components for job cards, map preview, and rating summary.
   - Use API services for authentication and job CRUD.
   - Store JWT tokens and protect routes.

4. **Location-based matching logic**
   - Store coordinates (latitude/longitude) on users and jobs.
   - Compute distance using Google Maps APIs or a Haversine fallback.
   - Rank results using skill match + distance + trust score.

5. **Trust & verification**
   - Add rating and review endpoints.
   - Calculate trust score as a combination of average rating + completed jobs.

6. **Testing & deployment**
   - Verify backend routes using Postman.
   - Run React app and confirm UI flow.
   - Deploy backend to a Node hosting provider and frontend to a static host.

## Run the Project Locally
1. **Backend**
   ```bash
   cd backend
   npm install
   npm run dev
   ```
   - Create a `.env` file with `MONGODB_URI` and `JWT_SECRET` if needed.
2. **Frontend**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   - The UI will be available at `http://localhost:5173`.

## Key Reference Alignment
This solution follows the principles of location-based services: accurate geolocation, proximity filtering, and location-aware matching as described by Steiniger et al. (2006). It also draws UX cues from platforms such as Upwork, Fiverr, Freelancer, Indeed, Naukri, and Justdial to keep onboarding and job matching lightweight, local, and trustworthy.

## References
1. S. Steiniger, M. Neun, and A. Edwardes, “Foundations of location based services,” CartouCHe – Cartography for Swiss Higher Education, 2006.
2. Upwork Global Inc., “Upwork Freelancing Platform,” https://www.upwork.com
3. Freelancer Technology Pty Limited, “Freelancer Online Job Marketplace,” https://www.freelancer.com
4. Fiverr International Ltd., “Fiverr Freelance Services Platform,” https://www.fiverr.com
5. Indeed Inc., “Indeed Job Search Platform,” https://www.indeed.com
6. Info Edge (India) Ltd., “Naukri.com Job Portal,” https://www.naukri.com
7. Justdial Ltd., “Justdial Local Services Platform,” https://www.justdial.com
8. MongoDB Inc., “MongoDB Documentation,” https://www.mongodb.com/docs
9. Meta Open Source, “React.js Documentation,” https://react.dev
10. Express.js Foundation, “Express.js Framework Documentation,” https://expressjs.com
11. Auth0, “JSON Web Token (JWT) Introduction,” https://jwt.io
