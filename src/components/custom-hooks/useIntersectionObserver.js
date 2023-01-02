import {useState,useEffect,useRef} from 'react'

const useIntersectionObserver = () => {

    const observerRef = useRef()

    const [show, setShow] = useState()

    useEffect(() => {
     const observer = new IntersectionObserver((entries)=>{
      const entry = entries[0]
      setShow(entry.isIntersecting)
      console.log('entry',entry)
     },{
        rootMargin:'-100px'
     })
     observer.observe(observerRef.current)
     console.log(observerRef.current)
   
    }, [])

    return [show,observerRef]
}

export default useIntersectionObserver