import React from "react"
import { NavLink } from "react-router-dom"
import { navbar } from "../data/navbar"

const Navbar = () => {
  // eslint-disable-next-line
  const [items, setItems] = React.useState(navbar)

  return (
    <>
      <ul className="mt-10">
        {items.map((item) => {
          const { id, title, link } = item
          return (
            <li key={id} className="my-4 capitalize">
              <NavLink to={link}>{title}</NavLink>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Navbar
