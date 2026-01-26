Personal Developer Portfolio (UPGRADE : Supports react 18.2.0 Deployment)

==================================================

Project Goal

The goal of this project is to build a clean, modern, and professional personal portfolio website.
This portfolio is designed to showcase my profile, skills, projects, and contact information in a simple and recruiter-friendly way.
It serves as a central place to represent my developer identity and share my work publicly.

==================================================

Project Overview

This is a single-page portfolio application built using React and Vite.
The design focuses on clarity, responsiveness, smooth animations, and ease of navigation.
The layout and flow are inspired by a modern developer portfolio style, keeping everything minimal and professional.

==================================================

Tech Stack

Frontend
React
Vite
JavaScript (ES6+)

Styling and UI
Tailwind CSS
AOS (Animate On Scroll)
Lucide React Icons

Backend / Services
Supabase (used for messages or dynamic data, if enabled)

Tools
Git
GitHub
VS Code
npm

==================================================

Project Structure

Root
package.json
vite.config.js
.env

src
Pages
Home.jsx
About.jsx
Portfolio.jsx
Contact.jsx

components  
  Navbar.jsx  
  Footer.jsx  
  Reusable UI components  

assets  
  Images  
  Icons  

lib  
  Supabase configuration  


public
Static assets

==================================================

Key Features

Responsive design for mobile, tablet, and desktop
Clean hero and about section
Skills and technology showcase
Portfolio section to highlight projects
Contact section for communication
Smooth animations and transitions
Easy customization of content
Recruiter-friendly layout

==================================================

How to Run the Project Locally

Step 1
Clone the repository

git clone <your-github-repository-url>

Step 2
Navigate into the project folder

cd Portfolio

Step 3
Install dependencies

npm install

If dependency conflicts occur

npm install --legacy-peer-deps

Step 4
Start the development server

npm run dev

Step 5
ctrl+Link to open the link in the browser


==================================================

Environment Variables

If Supabase features are used, create a .env file in the root directory and add:

VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

After adding or updating environment variables, restart the dev server.

==================================================

Customization Guide

To personalize this portfolio:

Update name and description inside the Home and About pages
Replace the profile image inside the public folder
Modify skills by editing the text inside the skills-related components
Update project details inside the Portfolio page
Replace the resume or CV link in the About section
Update social links such as GitHub and LinkedIn

No layout or styling changes are required to customize content.

==================================================

Learning Philosophy

This project follows a hands-on learning approach.
The focus is on building a real-world portfolio rather than over-engineering features.
The project emphasizes clean code, consistency, debugging skills, and practical frontend development experience.
