<<<<<<< HEAD
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const ScrollToTop = () => {
  let { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTop
=======
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const ScrollToTop = () => {
  let { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ScrollToTop
>>>>>>> abbe3da91fc96de43745ce84cd0360c387c65395
