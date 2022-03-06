import React, { useEffect, useState } from 'react'

const useDrawer = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => setScrolled(window.scrollY > 0));
  }, []);
  return scrolled
}

export default useDrawer