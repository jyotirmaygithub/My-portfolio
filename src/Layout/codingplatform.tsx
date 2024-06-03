import React from 'react'
import Codechef from "@/components/images/codechef"
import Leetcode from "@/components/images/leetcode"

export default function codingplatform() {
  return (
    <div className='flex flex-wrap space-x-5'>
      <Codechef/>
      <Leetcode/>
    </div>
  )
}
