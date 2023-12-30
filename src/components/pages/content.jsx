import {Routes, Route, Outlet, Link } from "react-router-dom";

import BasePage from './basePage.js'
import HomePage from './home.jsx'
import HomeLab from './projects/homelab/cluster.jsx'
import ResumePage from './resume/resume.jsx'
import ContactPage from './contact/contact.jsx'

const PageContent = () => {
  return (
    <BasePage>
    <Routes>
       <Route path="/" element={<HomePage />}/>
       <Route path="/projects/homelab/description" element={<HomeLab />}/>
       <Route path="/resume" element={<ResumePage />}/>
       <Route path="/contact" element={<ContactPage />}/>
   </Routes>
    </BasePage>
  );
};

export default PageContent;
