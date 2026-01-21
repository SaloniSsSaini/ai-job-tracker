📌 AI-Powered Job Tracker with Smart Matching

An advanced job tracking web application that helps users discover relevant job opportunities using resume-based matching, AI-style intent search, and application lifecycle tracking.

This project demonstrates product thinking, frontend–backend integration, and explainable AI logic.

🚀 Features
🔹 Job Discovery

Fetches jobs from a mock / external job source

Clean job feed with title, company, location, job type

“Apply” button for each job

🔹 Resume-Based Smart Matching (ATS-Inspired)

User uploads / provides resume text

Resume skills are automatically extracted

Each job is scored (0–100%) based on weighted skill matching

Explainable matching: users can see why a job matched

🔹 Best Matches Recommendation

Top 5 highest-scoring jobs highlighted

“⭐ Recommended for You” section for better UX

Reduces cognitive overload for job seekers

🔹 AI Chat Assistant (Intent-Based)

Natural language queries like:

“Show me remote React internships”

“Find frontend jobs”

AI interprets intent and dynamically filters jobs

No black-box AI — fully explainable logic

🔹 Application Tracking Dashboard

Track applied jobs in a dashboard

Realistic hiring lifecycle:

Applied → Interview → Offer / Rejected

Color-coded status updates

User can update status anytime

🧠 AI & Matching Logic

This project uses rule-based, explainable AI techniques inspired by Applicant Tracking Systems (ATS):

Skills are assigned different weights (e.g., React > generic keywords)

Resume text is scanned for known skills

Match score is calculated based on weighted overlap

Reasons for matching are shown to the user

This approach avoids black-box AI and improves transparency and trust.

🏗️ Architecture Overview
Frontend (React + Vite)
 ├── Jobs Page (Best Matches + Filters)
 ├── AI Chat Sidebar
 ├── Dashboard (Application Lifecycle)
 └── Context API (Global State)

Backend (Node.js + Fastify)
 ├── Resume Parsing Service
 ├── Matching Engine
 ├── AI Intent Parser
 └── REST APIs (/match, /chat, /apply)

⚙️ Tech Stack
Frontend

React 18

Vite

React Router

Axios

Context API

Backend

Node.js

Fastify

REST APIs

In-memory storage (extendable to DB / Redis)

▶️ How to Run Locally
1️⃣ Backend
cd backend
npm install
npm start


Runs on: http://localhost:3000

2️⃣ Frontend
cd frontend
npm install
npm run dev


Runs on: http://localhost:5173

🌐 Live Deployment Status

⚠️ Note on Deployment

The application is fully functional in the local environment.
During deployment, persistent build tool conflicts were encountered across multiple platforms (Vercel / Cloudflare Pages).

All core features are implemented and working as intended locally.

Detailed setup instructions and a complete codebase are provided to ensure easy evaluation.



📈 Scalability Considerations

Can handle 100+ jobs client-side with optimized filtering

Backend can be extended with:

Database (PostgreSQL / MongoDB)

Redis for caching

Real AI APIs (OpenAI / Gemini) if needed

Modular architecture supports future growth

⚖️ Trade-offs & Future Improvements

Replace mock job data with real job APIs

Add authentication & user profiles

Persist applications in a database

Deploy backend using Docker + cloud service

Enhance AI chat using LLM APIs

👤 Author

Saloni Saini
Aspiring Software Developer | Frontend & Full-Stack Enthusiast
