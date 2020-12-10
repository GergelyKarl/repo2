import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

function NavBar() {
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav>
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest px-3"
          >
            Ger
          </NavLink>
          <NavLink
            activeClassName="text-red-100 bg-red-700"
            to="/post"
            className="inline-flex flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-400"
          >
            Blog Posts
          </NavLink>
          <NavLink
            activeClassName="text-red-100 bg-red-700"
            to="/project"
            className="inline-flex flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-400"
          >
            Projects
          </NavLink>

          <NavLink
            to="/about"
            activeClassName="text-red-100 bg-red-700"
            className="inline-flex flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-400"
          >
            About me
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://linkedin.com/in/kapehe"
            className="mr-4 "
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://youtube.com/c/kapehe"
            className="mr-4 "
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://twitter.com/kapehe_ok"
            className="mr-4 "
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
