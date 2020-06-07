import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import ThemeContext from '../context/ThemeContext'

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeContext.Consumer>
      {theme => (  
      <>
        {/* The class of the wrapper div will change based on the context
        value of the dark variable, which we set as state in the ThemeContext.js file */}
        <div className={theme.dark ? 'dark' : 'light'}>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0 1.0875rem 1.45rem`,
            }}
          >
            <main>{children}</main>
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
          </div>
        </div>
      </>
    )}
    </ThemeContext.Consumer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
