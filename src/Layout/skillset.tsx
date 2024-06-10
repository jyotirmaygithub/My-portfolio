import React from 'react'
import FullStackSkills from '@/components/skills/fullstack'
import JavaSkills from '@/components/skills/java'

export default function Skillset() {
  return (
    <div className='space-y-5 m-4 sm:m-8 md:mx-20 md:my-10'>
      <h1 className='text-center text-2xl sm:text-3xl md:text-4xl font-bold'>
        Things I Know
      </h1>
      <div className='space-y-5'>
        <FullStackSkills />
        <JavaSkills />
      </div>
    </div>
  )
}
