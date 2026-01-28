import React from 'react'
import "../CSS/ErrorPage.css"
import { Link } from "react-router-dom"

function ErrorPage() {
  document.title = "Maqure | Page Not Found"
  return (
    <>
      <div className="error_page_main_div">
        <h1>404</h1>
        <p>Page Not Found!</p>
      </div>
      <p className="error_page_p">The Link might be broken, Go to <Link to="/" className="error_page_p_link">Home Page</Link>.</p>
    </>
  )
}

export default ErrorPage