import React from "react"
import { Link } from "gatsby"

const Footer = ({ author, title }) => {
  return (
    <div className="footer">
      <div className="container">
        <hr className="border-primary" />
        <p>
          {title}
          <Link to="https://www.gatsbyjs.com/">
            <br />
            {/*<strong>By {author}</strong>*/}
            <strong>Powered by @<u>Gatsby</u></strong><br/>
            <small>Images courtesy of Gold Coast Tourism</small>
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Footer
