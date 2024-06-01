import React from 'react'
import FullStackSkills from '@/components/skills/fullstack'
import JavaSkills from '@/components/skills/java'

export default function skillset() {
  return (
    <div className='space-y-5 mx-20'>
      <h1 className='text-center text-4xl font-bold'>Things which i know</h1>
      <FullStackSkills/>
      <JavaSkills/>
    </div>
  )
}
