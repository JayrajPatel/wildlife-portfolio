import React from "react"
import { Link } from "gatsby"
import "../styles.css"

const Layout = ({ children }) => (
  <div className="site-wrapper">
    <header>
      <nav>
        <Link to="/" activeClassName="active">About</Link>
        <Link to="/portfolio" activeClassName="active">Portfolio</Link>
        <Link to="/contact" activeClassName="active">Contact</Link>
      </nav>
    </header>
    <main>{children}</main>
    <footer style={{ position: "fixed", bottom: 0, left: 0, right: 0, backgroundColor: "rgba(255, 255, 255, 0.5)", padding: "20px", textAlign: "center" }}>
      <p>&copy; {new Date().getFullYear()} Jayraj Patel Photography</p>
    </footer>
  </div>
)

export default Layout
