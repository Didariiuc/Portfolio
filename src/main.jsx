import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Root from './components/Root.jsx'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route } from 'react-router'
import { RouterProvider } from 'react-router-dom'
import Skills from './components/Skills.jsx'
import Project from './components/Project.jsx'
import Education from './components/Education.jsx'
import NavBar from './components/NavBar.jsx'
import Hero from './components/Hero.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Publication from './components/Publication.jsx'
import { Navigate } from 'react-router-dom'

const repoName = "/Portfolio"; // 👈 Set this to your GitHub repo name if deploying to GitHub Pages, otherwise set to "/"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="skills" element={<Skills />} />
      <Route path="projects" element={<Project />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="publications" element={<Publication />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  ),
  { basename: repoName } // 👈 THIS IS THE CRITICAL ADDITION
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
