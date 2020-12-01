import { useEffect, useState, useRef } from 'react'

export function useNearScreen () {
  const element = useRef(null)
  const [show, setShow] = useState(false)
  useEffect(function () {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ? window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      // console.log(ref.current)
      const observer = new window.IntersectionObserver(function (entries) {
        // console.log(entries)
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
          setShow(true)
          observer.disconnect()
        }
        // console.log(isIntersecting)
      })
      observer.observe(element.current)
    })
  }, [element])
  return [show, element]
}
