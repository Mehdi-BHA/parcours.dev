import React, { useState } from 'react'

const useOpen = () => {
  const [isOpen, setIsOpen] = useState(false);
    const close = () => {
        setIsOpen(false);
    };
    const open = () => {
        setIsOpen(true);
    };
    const toggle = () => {
      setIsOpen(state=>!state)
    }
  return [isOpen,close,open,toggle]
}

export default useOpen