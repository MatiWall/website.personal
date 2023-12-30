import {Routes, Route, Outlet, Link } from "react-router-dom";

import BasePage from './basePage.js'
import HomePage from './home.jsx'
import HomeLab from './projects/homelab/cluster.jsx'
import PersonalWebsitePage from './projects/personalWebsite/page.js'
import ResumePage from './resume/resume.jsx'
import ContactPage from './contact/contact.jsx'
import {menu} from './menu.jsx';

const PageContent = () => {

    const generateRoutes = (menu) => {
  const routes = [];

  const traverseMenu = (menu) => {
    menu.forEach((menuItem) => {
      const path = `${menuItem.to}`;

      routes.push(
        <Route key={path} path={path} element={menuItem.element} />
      );

      if (menuItem.items) {
        traverseMenu(menuItem.items);
      }
    });
  };

  traverseMenu(menu);
  return routes;
};


  return (
    <BasePage>
    <Routes>
       {generateRoutes(menu)}
   </Routes>
    </BasePage>
  );
};

export default PageContent;
