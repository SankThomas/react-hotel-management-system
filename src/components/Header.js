import React from "react"
import Navbar from "./Navbar"

const Header = () => {
  return (
    <>
      <header className="absolute px-5 bg-gray-100 w-52 h-screen overflow-y-auto">
        <div className="logo">
          <h2>The Sankara HMS</h2>
        </div>

        <div>
          <Navbar />
        </div>
      </header>
    </>
  )
}

export default Header
