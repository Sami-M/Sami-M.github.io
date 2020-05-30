/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./layout.scss"

const Layout = ({ children }) => {

  return (
    <>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a className="navbar-item has-text-white" href="/">
            sami • dev
          </a>

          {/* <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a> */}
        </div>

        {/* <div id="navbarBasicExample" class="navbar-menu">

          <div class="navbar-end">
            <div class="navbar-item">
            <a class="navbar-item">
              🤔
            </a>
            <a class="navbar-item">
              🧠
            </a>
            <a class="navbar-item">
              📝
            </a>
            </div>
          </div>
        </div> */}
      </nav>
      <div class="section">{children}</div>
      <footer class="footer">
        <div class="content has-text-centered">
          <p>
            © {new Date().getFullYear()}
          </p>
        </div>        
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
