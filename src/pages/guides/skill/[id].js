import React from 'react'

const SkillGuide = () => {
  return (
    <div>[id]</div>
  )
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true // false or 'blocking'
  }
}

export default SkillGuide