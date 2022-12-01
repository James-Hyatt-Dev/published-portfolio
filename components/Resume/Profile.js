import React from 'react'

function Profile() {
  return (
    <div className="w-full flex flex-col gap-4">
        {/* title */}
        <div className="uppercase border-b border-gray-400 text-center">
            Profile
        </div>
        <div>
            <p className='text-xs lg:text-base lg:text-left font-extralight text-center leading-relaxed tracking-wider'>Creative Front-End Developer offering out-of-the-box thinker providing high
                impacting UX/UI design. Highly skilled in quick learning, problem solving and
                cooperative development. Aspiring to become an integral member of a well
                respected development team.
            </p>
        </div>
    </div>
  )
}

export default Profile